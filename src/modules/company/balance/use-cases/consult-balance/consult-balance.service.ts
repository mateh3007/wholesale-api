import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ConsultBalanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthCompanyService,
  ) {}

  async handle(cnpj, password) {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const company = await this.prisma.company.findFirst({
      where: {
        cnpj: cnpj,
      },
    });

    return company.balance;
  }
}
