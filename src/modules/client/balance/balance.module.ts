import { Module } from '@nestjs/common';
import { CreateDepositController } from './use-cases/create-deposit/create-deposit.controller';
import { CreateDepositService } from './use-cases/create-deposit/create-deposit.service';
import { PrismaService } from 'src/database/prisma.service';
import { ConsultBalanceController } from './use-cases/consult-balance/consult-balance.controller';
import { ConsultBalanceService } from './use-cases/consult-balance/consult-balance.service';
import { AuthClientService } from 'src/auth/client/auth-client.service';

@Module({
  controllers: [CreateDepositController, ConsultBalanceController],
  providers: [
    CreateDepositService,
    PrismaService,
    ConsultBalanceService,
    AuthClientService,
  ],
})
export class BalanceModule {}
