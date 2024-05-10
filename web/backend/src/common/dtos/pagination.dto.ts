import { IsOptional, IsPositive } from 'class-validator';

// TODO: Change message error in Spanish
export class PaginationDto {
  @IsPositive()
  @IsOptional()
  limit: number;

  @IsPositive()
  @IsOptional()
  offSet: number;
}
