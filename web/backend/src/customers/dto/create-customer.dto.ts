import { IsIn, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsIn(['DNI', 'NIE', 'TIE', 'PEP', 'CE', 'RC', 'CC', 'TI', 'SC', 'PAS'])
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
