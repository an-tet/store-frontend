import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  documentTypes,
  roles,
  shirtSizes,
} from 'src/common/constants/constants';

export class CreateUserDto {
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(20, {
    message: 'La contraseña debe tener como máximo 20 caracteres',
  })
  @IsString({ message: 'La contraseña debe ser un string' })
  password: string;

  @IsString({ message: 'El tipo de documento debe ser un string' })
  @IsIn(documentTypes)
  documentType: string;

  @IsString({ message: 'El número de documento debe ser un string' })
  dni: string;

  @IsString({ message: 'El nombre completo debe ser un string' })
  fullName: string;

  @IsEmail({}, { message: 'El email debe ser un email válido' })
  email: string;

  @IsDateString(
    {},
    { message: 'La fecha de nacimiento debe ser una fecha válida' },
  )
  birthday: string;

  @IsString({ message: 'El teléfono debe ser un string' })
  phone: string;

  @IsString({ message: 'La dirección debe ser un string' })
  @IsIn(shirtSizes, {
    message: 'La talla de camiseta debe ser una talla válida',
  })
  shirtSize: string;

  @IsBoolean({ message: 'El estado debe ser un valor valido' })
  @IsOptional()
  status: boolean;

  @IsString({ message: 'El rol debe ser un string' })
  @IsIn(roles, {
    message: 'El rol debe ser uno de los siguientes: "admin", "user"',
  })
  role: string;
}
