import { Module } from '@nestjs/common';
import { ConsultBalanceController } from './use-cases/consult-balance/consult-balance.controller';
import { ConsultBalanceService } from './use-cases/consult-balance/consult-balance.service';
import { PrismaService } from 'src/database/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [ConsultBalanceController],
  providers: [ConsultBalanceService, PrismaService, AuthService],
})
export class BalanceModule {}
