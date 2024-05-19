import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
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

  @Get('validate-session')
  @Auth()
  validateSession(@GetUser() user: User) {
    return this.authService.validateSession(user);
  }
}
