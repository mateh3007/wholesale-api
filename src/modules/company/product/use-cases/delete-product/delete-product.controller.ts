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

@Controller('company')
export class DeleteProductController {
  constructor(private readonly service: DeleteProductService) {}

  @Delete('delete-product')
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req, @Body() body: DeleteProductDto) {
    try {
      return await this.service.handle(req.user.cnpj, req.user.password, body);
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
