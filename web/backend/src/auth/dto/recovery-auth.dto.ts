import { IsEmail } from 'class-validator';

// TODO: Change message error in Spanish
export class RecoveryAuthDto {
  @IsEmail()
  email: string;
}
