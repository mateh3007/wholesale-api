import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientService } from './create-client.service';
import { CreateClientDto } from '../../dto/create-client.dto';

@Controller('create-client')
export class CreateClientController {
  constructor(private readonly service: CreateClientService) {}

  @Post()
  async handle(@Body() body: CreateClientDto) {
    return await this.service.handle(body);
  }
}
