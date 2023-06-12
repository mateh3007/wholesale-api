import { Controller, Get, UseGuards, Request, HttpCode } from '@nestjs/common';
import { ConsultBalanceService } from './consult-balance.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class ConsultBalanceController {
  constructor(private readonly service: ConsultBalanceService) {}

  @HttpCode(200)
  @Get('consult-balance')
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Request() req) {
    return await this.service.handle(req.user.email, req.user.password);
  }
}
