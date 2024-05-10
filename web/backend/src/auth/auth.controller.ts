import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RecoveryAuthDto } from './dto/recovery-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  login(@Body() loginUserDto: LoginAuthDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('recovery')
  recovery(@Body() recoveryUserDto: RecoveryAuthDto) {
    return this.authService.recovery(recoveryUserDto);
  }
}
