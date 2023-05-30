import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCompanyDto } from '../../dto/create-company.dto';
import { CreatedCompanyDto } from '../../dto/created-company.dto';

@Injectable()
export class CreateCompanyService {
  constructor(private readonly companyService: PrismaService) {}

  async handle(data: CreateCompanyDto): Promise<CreatedCompanyDto> {
    const companyAlreadyExists = await this.companyService.company.findUnique({
      where: {
        cnpj: data.cnpj,
      },
    });

    if (companyAlreadyExists) {
      throw new Error('Company Already Exists!!!');
    }

    const user = await this.companyService.company.create({ data });

    return user;
  }
}
