import { PlaceOrderService } from './place-order.service';
import { PlaceOrderDto } from '../../dto/place-order.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly service: PlaceOrderService) {}

  @Post()
  async handle(@Body() body: PlaceOrderDto) {
    return await this.service.handle(body);
  }
}
