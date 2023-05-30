import { IsDate, IsNotEmpty } from '@nestjs/class-validator';

export class CreatedCompanyDto {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  cnpj: string;
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @IsDate()
  @IsNotEmpty()
  deletedAt: Date;
}
