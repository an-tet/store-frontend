import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RecoveryAuthDto } from './dto/recovery-auth.dto';
import { GetUser } from './decorators/get-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginUserDto: LoginAuthDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('logout')
  @Auth()
  logout(@GetUser() user: User) {
    return this.authService.logout(user);
  }

  @Post('recovery')
  recovery(@Body() recoveryUserDto: RecoveryAuthDto) {
    return this.authService.recovery(recoveryUserDto);
  }

  @Get('validate-session')
  @Auth()
  validateSession(@GetUser() user: User) {
    return this.authService.validateSession(user);
  }
}
