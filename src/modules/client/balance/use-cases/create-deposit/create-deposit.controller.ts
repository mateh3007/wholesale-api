import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { CreateDepositService } from './create-deposit.service';
import { CreateDepositDto } from 'src/modules/client/dto/create-deposit.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('cclient')
export class CreateDepositController {
  constructor(private readonly service: CreateDepositService) {}

  @Post('create-deposit')
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Body() body: CreateDepositDto, @Request() req) {
    return await this.service.handle(req.user.email, req.user.password, body);
  }
}
