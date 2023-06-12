import {
  Controller,
  Get,
  UnauthorizedException,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { ConsultBalanceService } from './consult-balance.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('company')
export class ConsultBalanceController {
  constructor(private readonly service: ConsultBalanceService) {}

  @HttpCode(200)
  @Get('consult-balance')
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
