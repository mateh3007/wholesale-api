import { Module } from '@nestjs/common';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
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

@Module({
  controllers: [
    GetOneProductController,
    CreateProductController,
    GetAllProductsController,
    UpdateProductController,
    DeleteProductController,
  ],
  providers: [
    PrismaService,
    AuthCompanyService,
    CreateProductService,
    GetAllProductsService,
    GetOneProductService,
    UpdateProductService,
    DeleteProductService,
  ],
})
export class ProductModule {}
