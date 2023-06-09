import {
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Body,
  HttpCode,
} from '@nestjs/common';
import { DepositBalanceService } from './deposit-balance.service';
import { AuthGuard } from '@nestjs/passport';
import { DepositBalanceDto } from '../../dto/deposit-balance.dto';

@Controller('company')
export class DepositBalanceController {
  constructor(private readonly service: DepositBalanceService) {}

  @HttpCode(201)
  @Post('deposit-balance')
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req, @Body() body: DepositBalanceDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
