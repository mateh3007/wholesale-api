import { Controller, Get } from '@nestjs/common';
import { GetAllProductsService } from './get-all-products.service';

@Controller('company')
export class GetAllProductsController {
  constructor(private readonly service: GetAllProductsService) {}

  @Get('get-all-products')
  async handle() {
    return await this.service.handle();
  }
}
