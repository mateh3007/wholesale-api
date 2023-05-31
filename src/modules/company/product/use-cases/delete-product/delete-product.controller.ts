import {
  Body,
  Controller,
  Delete,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DeleteProductService } from './delete-product.service';
import { DeleteProductDto } from '../../dto/delete-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('delete-product')
export class DeleteProductController {
  constructor(private readonly service: DeleteProductService) {}

  @Delete()
  @UseGuards(AuthGuard('basic'))
  async handle(@Request() req, @Body() body: DeleteProductDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
