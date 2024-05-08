import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  private logger = new Logger('ProductService');

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const customer = this.customerRepository.create({ ...createCustomerDto });
      return await this.customerRepository.save(customer);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: string) {
    return this.customerRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.preload({
      id,
      ...updateCustomerDto,
    });

    if (!customer)
      throw new NotFoundException(`customer with id: "${id}" not found`);

    await this.customerRepository.save(customer);

    return customer;
  }

  async remove(id: string) {
    const customer = await this.findOne(id);

    if (!customer) throw new NotFoundException();

    return this.customerRepository.delete(customer);
  }

  handleExceptions(error: any) {
    this.logger.error(error);

    // Error: duplicate key value violates unique constraint
    if (error.code === '23505')
      throw new HttpException('customer already exists', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
