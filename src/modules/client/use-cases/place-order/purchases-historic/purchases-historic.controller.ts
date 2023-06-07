import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { PurchasesHistoricService } from './purchases-historic.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class PurchasesHistoricController {
  constructor(private readonly service: PurchasesHistoricService) {}

  @Get('purchases-historic')
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Request() req) {
    return await this.service.handle(req.user, req.password);
  }
}
