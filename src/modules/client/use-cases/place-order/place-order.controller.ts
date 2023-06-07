import { PlaceOrderService } from './place-order.service';
import { PlaceOrderDto } from '../../dto/place-order.dto';
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly service: PlaceOrderService) {}

  @Post()
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Request() req, @Body() body: PlaceOrderDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
