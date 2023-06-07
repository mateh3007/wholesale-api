import { Body, Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from '../../dto/account.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get('account')
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Body() body: AccountDto, @Request() req) {
    return await this.service.handle(req.user, req.password, body);
  }
}
