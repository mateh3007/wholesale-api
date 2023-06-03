import { Module } from '@nestjs/common';
import { CreateDepositController } from './use-cases/create-deposit/create-deposit.controller';
import { CreateDepositService } from './use-cases/create-deposit/create-deposit.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CreateDepositController],
  providers: [CreateDepositService, PrismaService],
})
export class BalanceModule {}
