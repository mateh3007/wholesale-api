import { Module } from '@nestjs/common';
import { CreateCompanyService } from './use-cases/create-company/create-company.service';
import { CreateCompanyController } from './use-cases/create-company/create-company.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GetAllCompaniesController } from './use-cases/get-all-companies/get-all-companies.controller';
import { GetAllCompaniesService } from './use-cases/get-all-companies/get-all-companies.service';
import { UpdateCompanyController } from './use-cases/update-company/update-company.controller';
import { UpdateCompanyService } from './use-cases/update-company/update-company.service';
import { GetOneCompanyController } from './use-cases/get-one-company/get-one-company.controller';
import { GetOneCompanyService } from './use-cases/get-one-company/get-one-company.service';
import { DeleteCompanyController } from './use-cases/delete-company/delete-company.controller';
import { DeleteCompanyService } from './use-cases/delete-company/delete-company.service';
import { ProductModule } from './product/product.module';

@Module({
  providers: [
    CreateCompanyService,
    PrismaService,
    GetAllCompaniesService,
    UpdateCompanyService,
    GetOneCompanyService,
    DeleteCompanyService,
  ],
  controllers: [
    CreateCompanyController,
    GetAllCompaniesController,
    UpdateCompanyController,
    GetOneCompanyController,
    DeleteCompanyController,
  ],
  imports: [ProductModule],
})
export class CompanyModule {}
