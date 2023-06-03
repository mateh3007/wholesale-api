import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductController } from './use-cases/create-product/create-product.controller';
import { CreateProductService } from './use-cases/create-product/create-product.service';
import { DeleteProductController } from './use-cases/delete-product/delete-product.controller';
import { DeleteProductService } from './use-cases/delete-product/delete-product.service';
import { GetAllProductsController } from './use-cases/get-all-products/get-all-products.controller';
import { GetAllProductsService } from './use-cases/get-all-products/get-all-products.service';
import { UpdateProductController } from './use-cases/update-product/update-product.controller';
import { UpdateProductService } from './use-cases/update-product/update-product.service';
import { GetOneProductService } from './use-cases/get-one-product/get-one-product.service';
import { GetOneProductController } from './use-cases/get-one-product/get-one-product.controller';
import { SellProductController } from './use-cases/sell-product/sell-product.controller';
import { SellProductService } from './use-cases/sell-product/sell-product.service';

@Module({
  controllers: [
    GetOneProductController,
    CreateProductController,
    GetAllProductsController,
    UpdateProductController,
    DeleteProductController,
    SellProductController,
  ],
  providers: [
    PrismaService,
    AuthService,
    CreateProductService,
    GetAllProductsService,
    GetOneProductService,
    UpdateProductService,
    DeleteProductService,
    SellProductService,
  ],
})
export class ProductModule {}
