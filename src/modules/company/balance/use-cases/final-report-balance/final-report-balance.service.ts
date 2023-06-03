import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';
// import { FinalReportMessage } from './message/final-report-message';

@Injectable()
export class FinalReportBalanceService {
  private isWithin7Days(date: Date): boolean {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    return date >= sevenDaysAgo;
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthService,
  ) {}

  async handle(cnpj, password) {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const lastSentDate = await this.prisma.company.findFirst({
      select: { reportSentDate: true },
      orderBy: { reportSentDate: 'desc' },
    });

    if (lastSentDate && this.isWithin7Days(lastSentDate.reportSentDate)) {
      return 'you can only get another report after 7 days of the last request';
    }

    await this.prisma.company.update({
      where: {
        cnpj: cnpj,
      },
      data: { reportSentDate: new Date() },
    });

    // const company = await this.prisma.company.findUnique({
    //   where: { cnpj },
    //   select: { balance: true },
    // });

    // const expenses = await this.prisma.expense.findMany({
    //   where: { companyId },
    //   select: { amount: true },
    // });

    // const totalExpenses = expenses.reduce(
    //   (sum, expense) => sum + expense.amount,
    //   0,
    // );
    // const profit = company.balance - totalExpenses;
    // FinalReportMessage();

    return;
  }
}
