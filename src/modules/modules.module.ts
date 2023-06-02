import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [CompanyModule, ClientModule],
})
export class ModulesModule {}
