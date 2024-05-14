import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RecoveryAuthDto } from './dto/recovery-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { compareSync } from 'src/common/utilities/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginAuthDto) {
    const { email, password } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
      select: { id: true, email: true, password: true },
    });

    if (!user || !compareSync(password, user.password))
      throw new UnauthorizedException(
        'El email o la contraseña son incorrectos',
      );
    delete user.password;
    return {
      ...user,
      token: this.getToken({ id: user.id }),
    };
  }

  logout(user: User) {}

  recovery(recoveryUserDto: RecoveryAuthDto) {
    // TODO: Implement password recovery in the future
    return;
  }

  validateSession(user: User) {
    return {
      ...user,
      token: this.getToken({ id: user.id }),
    };
  }

  private getToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
