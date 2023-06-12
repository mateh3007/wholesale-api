import {
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
  Request,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateProductService } from './create-product.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDto } from '../../dto/create-product.dto';

@Controller('company')
export class CreateProductController {
  constructor(private readonly productService: CreateProductService) {}

  @HttpCode(201)
  @Post('create-product')
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
