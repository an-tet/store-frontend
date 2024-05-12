import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(20, {
    message: 'La contraseña debe tener como máximo 20 caracteres',
  })
  @IsString({ message: 'La contraseña debe ser un string' })
  password: string;

  @IsEmail({}, { message: 'El email debe ser un email válido' })
  email: string;
}
