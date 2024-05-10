import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RecoveryAuthDto } from './dto/recovery-auth.dto';

@Injectable()
export class AuthService {
  login(loginUserDto: LoginAuthDto) {
    return 'This action adds a new auth';
  }

  recovery(recoveryUserDto: RecoveryAuthDto) {
    return `This action returns all auth`;
  }
}
