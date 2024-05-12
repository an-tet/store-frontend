import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsPositive({
    message: 'La página debe ser un número positivo',
  })
  @IsOptional()
  limit: number;

  @IsPositive({
    message: 'El offset debe ser un número positivo',
  })
  @IsOptional()
  offSet: number;
}
