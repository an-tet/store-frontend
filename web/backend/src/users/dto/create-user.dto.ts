import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ValidRoles } from 'src/auth/enum/valid-roles';
import { documentType } from 'src/common/enums/document-type.enum';
import { shirtSizes } from 'src/products/enums/shirt-size.enum';

export class CreateUserDto {
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(20, {
    message: 'La contraseña debe tener como máximo 20 caracteres',
  })
  @IsString({ message: 'La contraseña debe ser un string' })
  password: string;

  @IsString({ message: 'El tipo de documento debe ser un string' })
  @IsEnum(documentType, {
    message: 'El tipo de documento debe ser uno de los siguientes: '.concat(
      Object.values(documentType).join(', '),
    ),
  })
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
  @IsEnum(shirtSizes, {
    message: 'La talla de camiseta debe ser una talla válida: '.concat(
      Object.values(shirtSizes).join(', '),
    ),
  })
  shirtSize: string;

  @IsBoolean({ message: 'El estado debe ser un valor valido' })
  @IsOptional()
  status: boolean;

  @IsString({ message: 'El rol debe ser un string' })
  @IsEnum(ValidRoles, {
    message: 'El rol debe ser uno de los siguientes: '.concat(
      Object.values(ValidRoles).join(', '),
    ),
  })
  role: string;
}
