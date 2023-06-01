import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ConsultBalanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthService,
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
