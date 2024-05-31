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
import { PaginationDto } from 'src/common/dtos/pagination.dto';

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

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offSet = 0 } = paginationDto;
    return this.customerRepository.find({
      take: limit,
      skip: offSet,
    });
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
      throw new NotFoundException(
        `El cliente no fue encontrado con el id: "${id}"`,
      );

    await this.customerRepository.save(customer);

    return customer;
  }

  // TODO: Create error manager service
  handleExceptions(error: any) {
    this.logger.error(error);

    if (error.code === '23505')
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
