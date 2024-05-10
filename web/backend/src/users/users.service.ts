import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private logger = new Logger('UserService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...createUser } = createUserDto;

      const user = this.userRepository.create({
        ...createUser,
        password: bcrypt.hashSync(password, 10),
      });
      return await this.userRepository.save(user);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offSet = 0 } = paginationDto;
    return this.userRepository.find({
      take: limit,
      skip: offSet,
    });
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user)
      throw new NotFoundException(
        `El usuario no fue encontrado con el id: "${id}"`,
      );

    await this.userRepository.save(user);

    return user;
  }

  async remove(id: string) {
    const customer = await this.findOne(id);

    if (!customer) throw new NotFoundException();

    return this.userRepository.delete(id);
  }

  handleExceptions(error: any) {
    this.logger.error(error);

    if (error.code === '23505')
      throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
