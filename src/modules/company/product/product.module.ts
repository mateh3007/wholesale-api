import { Module } from '@nestjs/common';
import { CreateProductController } from './use-cases/create-product/create-product.controller';
import { CreateProductService } from './use-cases/create-product/create-product.service';
import { GetAllProductsController } from './use-cases/get-all-products/get-all-products.controller';
import { GetAllProductsService } from './use-cases/get-all-products/get-all-products.service';
import { GetOneProductController } from './use-cases/get-one-product/get-one-product.controller';
import { GetOneProductService } from './use-cases/get-one-product/get-one-product.service';
import { UpdateProductService } from './use-cases/update-product/update-product.service';
import { UpdateProductController } from './use-cases/update-product/update-product.controller';
import { DeleteProductController } from './use-cases/delete-product/delete-product.controller';
import { DeleteProductService } from './use-cases/delete-product/delete-product.service';
import { PrismaService } from 'src/database/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [
    CreateProductController,
    GetAllProductsController,
    GetOneProductController,
    UpdateProductController,
    DeleteProductController,
  ],
  providers: [
    PrismaService,
    AuthService,
    CreateProductService,
    GetAllProductsService,
    GetOneProductService,
    UpdateProductService,
    DeleteProductService,
  ],
})
export class ProductModule {}
