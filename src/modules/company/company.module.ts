import { Module } from '@nestjs/common';
import { CreateCompanyService } from './use-cases/create-company/create-company.service';
import { CreateCompanyController } from './use-cases/create-company/create-company.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [CreateCompanyService, PrismaService],
  controllers: [CreateCompanyController],
})
export class CompanyModule {}
