import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { Product } from './entities/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  private logger = new Logger('ProductService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto, user: User) {
    try {
      const product = this.productRepository.create({
        ...createProductDto,
        user,
      });
      return await this.productRepository.save(product);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id,
      ...updateProductDto,
    });

    if (!product)
      throw new NotFoundException(
        `El producto no fue encontrado con el id: "${id}"`,
      );

    await this.productRepository.save(product);

    return product;
  }

  async remove(id: string) {
    const product = await this.findOne(id);

    if (!product) throw new NotFoundException();

    return this.productRepository.delete(id);
  }

  // TODO: Create error manager service
  handleExceptions(error: any) {
    this.logger.error(error);

    if (error.code === '23505')
      throw new HttpException('El producto ya existe', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
