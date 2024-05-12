import { IsEmail } from 'class-validator';

export class RecoveryAuthDto {
  @IsEmail({}, { message: 'El email debe ser un email válido' })
  email: string;
}
