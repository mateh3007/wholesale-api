import { Body, Controller, Post } from '@nestjs/common';
import { CreateDepositService } from './create-deposit.service';
import { CreateDepositDto } from 'src/modules/client/dto/create-deposit.dto';

@Controller('create-deposit')
export class CreateDepositController {
  constructor(private readonly service: CreateDepositService) {}

  @Post()
  async handle(@Body() body: CreateDepositDto) {
    return await this.service.handle(body);
  }
}
