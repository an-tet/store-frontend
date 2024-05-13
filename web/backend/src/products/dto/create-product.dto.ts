import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  detail: string;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
    },
    { message: 'El precio debe ser un número' },
  )
  price: number;

  @IsInt({ message: 'El stock debe ser un número' })
  stock: number;

  @IsBoolean({
    message: 'El estado debe ser un booleano',
  })
  status: boolean;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
