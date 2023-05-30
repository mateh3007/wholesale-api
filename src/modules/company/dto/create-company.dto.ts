import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from '@nestjs/class-validator';

export class CreateCompanyDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(150)
  name: string;
  password: string;
  address: string;
  email: string;
  phone: string;
  cnpj: string;
}
