import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterClientController } from './use-cases/create-client/create-client.controller';
import { RegisterClientService } from './use-cases/create-client/create-client.service';
import { PlaceOrderController } from './use-cases/place-order/place-order.controller';
import { PlaceOrderService } from './use-cases/place-order/place-order.service';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
import { BalanceModule } from './balance/balance.module';
import { PurchasesHistoricService } from './use-cases/place-order/purchases-historic/purchases-historic.service';
import { PurchasesHistoricController } from './use-cases/place-order/purchases-historic/purchases-historic.controller';
import { AccountController } from './use-cases/account/account.controller';
import { AccountService } from './use-cases/account/account.service';
import { AuthClientService } from 'src/auth/client/auth-client.service';

@Module({
  controllers: [
    RegisterClientController,
    PlaceOrderController,
    PurchasesHistoricController,
    AccountController,
  ],
  providers: [
    AuthClientService,
    RegisterClientService,
    PrismaService,
    PlaceOrderService,
    AuthCompanyService,
    PurchasesHistoricService,
    AccountService,
  ],
  imports: [BalanceModule],
})
export class ClientModule {}
