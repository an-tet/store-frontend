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
import { encodeSync } from 'src/common/utilities/bcrypt';

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
        password: encodeSync(password),
      });
      const userSaved = await this.userRepository.save(user);
      delete userSaved.password;
      return userSaved;
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

  async toggleState(id: string) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException();

    return this.userRepository.update(id, { status: !user.status });
  }

  async seed() {
    const [_, count] = await this.userRepository.findAndCount({});
    if (count > 0)
      throw new HttpException(
        'No puede usar esta funcionalidad si ya existen usuarios',
        HttpStatus.CONFLICT,
      );

    const adminUser = {
      password: '123456789',
      documentType: 'CC',
      dni: '0000000000',
      fullName: 'admin',
      email: 'admin@gmail.com',
      birthday: '1900-01-01',
      phone: '0000000000',
      shirtSize: 'XS',
      status: true,
      role: 'admin',
    };

    const user = this.userRepository.create({
      ...adminUser,
      password: encodeSync(adminUser.password),
    });
    const userSaved = await this.userRepository.save(user);
    delete userSaved.password;

    return userSaved;
  }

  handleExceptions(error: any) {
    this.logger.error(error);

    if (error.code === '23505')
      throw new HttpException('El correo ya existe', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
