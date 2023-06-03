import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterClientController } from './use-cases/create-client/create-client.controller';
import { RegisterClientService } from './use-cases/create-client/create-client.service';
import { PlaceOrderController } from './use-cases/place-order/place-order.controller';
import { PlaceOrderService } from './use-cases/place-order/place-order.service';
import { AuthService } from 'src/auth/auth.service';
import { DebitFormController } from './use-cases/place-order/debit-form/debit-form.controller';
import { CreditFormController } from './use-cases/place-order/credit-form/credit-form.controller';
import { BalanceModule } from './balance/balance.module';

@Module({
  controllers: [
    RegisterClientController,
    PlaceOrderController,
    DebitFormController,
    CreditFormController,
  ],
  providers: [
    RegisterClientService,
    PrismaService,
    PlaceOrderService,
    AuthService,
  ],
  imports: [BalanceModule],
})
export class ClientModule {}
