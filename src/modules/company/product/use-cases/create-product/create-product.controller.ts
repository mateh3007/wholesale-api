import {
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { CreateProductService } from './create-product.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDto } from '../../dto/create-product.dto';

@Controller('create-product')
export class CreateProductController {
  constructor(private readonly productService: CreateProductService) {}

  @Post()
  @UseGuards(AuthGuard('BasicCompanyStrategy'))
  async handle(@Request() req, @Body() body: CreateProductDto) {
    try {
      return await this.productService.handle(
        req.user.cnpj,
        req.user.password,
        body,
      );
    } catch (error) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
