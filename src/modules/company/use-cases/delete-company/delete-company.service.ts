import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DeleteCompanyDto } from '../../dto/delete-company.dto';

@Injectable()
export class DeleteCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: DeleteCompanyDto) {
    const company = await this.prisma.company.findUnique({
      where: {
        cnpj: data.cnpj,
      },
    });

    if (!company) {
      throw new Error('Company not funded');
    }

    return await this.prisma.company.delete({
      where: {
        cnpj: data.cnpj,
      },
    });
  }
}
