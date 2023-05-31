import {
  Body,
  Controller,
  Put,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UpdateProductService } from './update-product.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateProductDto } from '../../dto/update-product.dto';

@Controller('update-product')
export class UpdateProductController {
  constructor(private readonly service: UpdateProductService) {}

  @Put()
  @UseGuards(AuthGuard('basic'))
  async handle(@Request() req, @Body() body: UpdateProductDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
