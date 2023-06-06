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
import { PurchasesHistoricService } from './use-cases/place-order/purchases-historic/purchases-historic.service';
import { PurchasesHistoricController } from './use-cases/place-order/purchases-historic/purchases-historic.controller';

@Module({
  controllers: [
    RegisterClientController,
    PlaceOrderController,
    DebitFormController,
    CreditFormController,
    PurchasesHistoricController,
  ],
  providers: [
    RegisterClientService,
    PrismaService,
    PlaceOrderService,
    AuthService,
    PurchasesHistoricService,
  ],
  imports: [BalanceModule],
})
export class ClientModule {}
