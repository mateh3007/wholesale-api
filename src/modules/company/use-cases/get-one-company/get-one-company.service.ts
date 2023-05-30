import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatedCompanyDto } from '../../dto/created-company.dto';
import { GetOneCompanyDto } from '../../dto/get-one-company.dto';

@Injectable()
export class GetOneCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: GetOneCompanyDto): Promise<CreatedCompanyDto> {
    const company = await this.prisma.company.findUnique({
      where: {
        cnpj: data.cnpj,
      },
    });

    if (!company) {
      throw new Error('Company not funded');
    }
    return company;
  }
}
