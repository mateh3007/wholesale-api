import { Controller, Get } from '@nestjs/common';
import { PurchasesHistoricService } from './purchases-historic.service';

@Controller('purchases-historic')
export class PurchasesHistoricController {
  constructor(private readonly service: PurchasesHistoricService) {}

  @Get()
  async handle() {
    return await this.service.handle();
  }
}
