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

// TODO: Change message error in Spanish
export class CreateUserDto {
  @MinLength(8)
  @MaxLength(20)
  @IsString()
  password: string;

  @IsString()
  @IsIn(documentTypes)
  documentType: string;

  @IsString()
  dni: string;

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsDateString()
  birthday: string;

  @IsString()
  phone: string;

  @IsString()
  @IsIn(shirtSizes)
  shirtSize: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;

  @IsArray()
  @IsIn(roles, {
    each: true,
    message: 'El rol debe ser uno de los siguientes: "admin", "user"',
  })
  roles: string[];
}
