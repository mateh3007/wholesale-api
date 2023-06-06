import { Body, Controller, Get } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from '../../dto/account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get()
  async handle(@Body() body: AccountDto) {
    return await this.service.handle(body);
  }
}
