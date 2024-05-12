import { IsIn, IsOptional, IsString } from 'class-validator';
import { documentTypes } from 'src/common/constants/constants';

export class CreateCustomerDto {
  @IsString({ message: 'El tipo de documento debe ser un string' })
  @IsIn(documentTypes, {
    message:
      'El tipo de documento debe ser uno de los siguientes tipos de documento: '.concat(
        documentTypes.join(', '),
      ),
  })
  documentType: string;

  @IsString({
    message: 'El número de documento debe ser un string',
  })
  dni: string;

  @IsString({
    message: 'El nombre completo debe ser un string',
  })
  @IsOptional()
  fullName?: string;

  @IsString({
    message: 'El email debe ser un string',
  })
  @IsOptional()
  email?: string;

  @IsString({
    message: 'La fecha de nacimiento debe ser un string',
  })
  @IsOptional()
  birthday?: string;

  @IsString({
    message: 'El teléfono debe ser un string',
  })
  @IsOptional()
  phone?: string;
}
