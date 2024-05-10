import { IsIn, IsOptional, IsString } from 'class-validator';
import { documentTypes } from 'src/common/constants/constants';

export class CreateCustomerDto {
  @IsString()
  @IsIn(documentTypes)
  documentType: string;

  @IsString()
  dni: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  birthday?: string;

  @IsString()
  @IsOptional()
  phone?: string;
}
