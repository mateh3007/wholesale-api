import { Body, Controller, Get } from '@nestjs/common';
import { GetOneProductDto } from '../../dto/get-one-product.dto';
import { GetOneProductService } from './get-one-product.service';

@Controller('company')
export class GetOneProductController {
  constructor(private readonly service: GetOneProductService) {}

  @Get('get-one-product')
  async handle(@Body() body: GetOneProductDto) {
    return await this.service.handle(body);
  }
}
