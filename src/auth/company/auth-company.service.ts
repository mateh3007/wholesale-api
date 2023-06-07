import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthCompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(cnpj: string, password: string) {
    const isValid = await this.prisma.company.findFirst({
      where: {
        cnpj,
        password,
      },
    });

    if (isValid) {
      return isValid;
    }
    return null;
  }
}
