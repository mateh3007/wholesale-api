import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterClientService } from './create-client.service';
import { RegisterClientDto } from '../../dto/register-client.dto';

@Controller('client')
export class RegisterClientController {
  constructor(private readonly service: RegisterClientService) {}

  @HttpCode(201)
  @Post('create-client')
  async handle(@Body() body: RegisterClientDto) {
    return await this.service.handle(body);
  }
}
