import {
  Controller,
  Get,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ConsultBalanceService } from './consult-balance.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('consult-balance')
export class ConsultBalanceController {
  constructor(private readonly service: ConsultBalanceService) {}

  @Get()
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
