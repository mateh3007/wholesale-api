import { Module } from '@nestjs/common';
import { CreateCompanyService } from './use-cases/create-company/create-company.service';
import { CreateCompanyController } from './use-cases/create-company/create-company.controller';
import { PrismaService } from 'src/database/prisma.service';
import { GetAllCompaniesController } from './use-cases/get-all-companies/get-all-companies.controller';
import { GetAllCompaniesService } from './use-cases/get-all-companies/get-all-companies.service';

@Module({
  providers: [CreateCompanyService, PrismaService, GetAllCompaniesService],
  controllers: [CreateCompanyController, GetAllCompaniesController],
})
export class CompanyModule {}
