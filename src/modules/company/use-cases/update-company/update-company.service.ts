import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateCompanyDto } from '../../dto/update-company.dto';
import { CreatedCompanyDto } from '../../dto/created-company.dto';

@Injectable()
export class UpdateCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: UpdateCompanyDto): Promise<CreatedCompanyDto> {
    const companyExists = await this.prisma.company.findUnique({
      where: {
        cnpj: data.cnpj,
      },
    });

    if (!companyExists) {
      throw new Error('Company not find');
    }

    const updatedCompany = await this.prisma.company.update({
      where: {
        cnpj: data.cnpj,
      },
      data,
    });

    return updatedCompany;
  }
}
