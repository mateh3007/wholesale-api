import {
  Body,
  Controller,
  Get,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from '../../dto/account.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get('account')
  @HttpCode(200)
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Body() body: AccountDto, @Request() req) {
    return await this.service.handle(req.user.email, req.user.password, body);
  }
}
