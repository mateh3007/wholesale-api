import { Module } from '@nestjs/common';
import { ConsultBalanceController } from './use-cases/consult-balance/consult-balance.controller';
import { ConsultBalanceService } from './use-cases/consult-balance/consult-balance.service';
import { PrismaService } from 'src/database/prisma.service';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
import { DepositBalanceService } from './use-cases/deposit-balance/deposit-balance.service';
import { DepositBalanceController } from './use-cases/deposit-balance/deposit-balance.controller';
import { ExpenseBalanceController } from './use-cases/expense-balance/expense-balance.controller';
import { ExpenseBalanceService } from './use-cases/expense-balance/expense-balance.service';
@Module({
  controllers: [
    ConsultBalanceController,
    DepositBalanceController,
    ExpenseBalanceController,
  ],
  providers: [
    ConsultBalanceService,
    PrismaService,
    AuthCompanyService,
    DepositBalanceService,
    ExpenseBalanceService,
  ],
})
export class BalanceModule {}
