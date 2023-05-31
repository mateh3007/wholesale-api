import { Controller, Get } from '@nestjs/common';
import { GetAllProductsService } from './get-all-products.service';

@Controller('get-all-products')
export class GetAllProductsController {
  constructor(private readonly service: GetAllProductsService) {}

  @Get()
  async handle() {
    return await this.service.handle();
  }
}
