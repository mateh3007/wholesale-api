import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ExpenseBalanceService } from './expense-balance.service';
import { AuthGuard } from '@nestjs/passport';
import { ExpenseBalanceDto } from '../../dto/expense-balance.dto';

@Controller('expense-balance')
export class ExpenseBalanceController {
  constructor(private readonly service: ExpenseBalanceService) {}

  @Post()
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req, @Body() body: ExpenseBalanceDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
