import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
import { PrismaService } from 'src/database/prisma.service';
import { ExpenseBalanceDto } from '../../dto/expense-balance.dto';

@Injectable()
export class ExpenseBalanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthCompanyService,
  ) {}

  async handle(cnpj, password, data: ExpenseBalanceDto) {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const company = await this.prisma.company.findFirst({
      where: {
        cnpj: cnpj,
      },
    });

    const newBalance: number = company.balance - data.amount;

    const updatedCompany = await this.prisma.company.update({
      where: {
        cnpj: cnpj,
      },
      data: { balance: newBalance },
    });

    return updatedCompany;
  }
}
