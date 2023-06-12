import { PlaceOrderService } from './place-order.service';
import { PlaceOrderDto } from '../../dto/place-order.dto';
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class PlaceOrderController {
  constructor(private readonly service: PlaceOrderService) {}

  @HttpCode(200)
  @Post('place-order')
  @UseGuards(AuthGuard('BasicClientStrategy'))
  async handle(@Request() req, @Body() body: PlaceOrderDto) {
    try {
      return await this.service.handle(req.user.email, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
