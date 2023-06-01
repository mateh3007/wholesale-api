import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { DepositBalanceDto } from '../../dto/deposit-balance.dto';

@Injectable()
export class DepositBalanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthService,
  ) {}

  async handle(cnpj, password, data: DepositBalanceDto) {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const company = await this.prisma.company.findFirst({
      where: {
        cnpj: cnpj,
      },
    });

    const newBalance: number = company.balance + data.amount;

    const updatedCompany = await this.prisma.company.update({
      where: {
        cnpj: cnpj,
      },
      data: { balance: newBalance },
    });

    return updatedCompany;
  }
}
