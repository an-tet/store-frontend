import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

// TODO: Change message error in Spanish
export class LoginAuthDto {
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
