import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicCompanyStrategy } from './company/strategy/basic-company.strategy';
import { PrismaService } from 'src/database/prisma.service';
import { AuthClientController } from './client/auth-client.controller';
import { AuthClientService } from './client/auth-client.service';
import { AuthCompanyController } from './company/auth-company.controller';
import { AuthCompanyService } from './company/auth-company.service';
import { BasicClientStrategy } from './client/strategy/basic-client.strategy';

@Module({
  imports: [PassportModule],
  controllers: [AuthCompanyController, AuthClientController],
  providers: [
    AuthCompanyService,
    BasicCompanyStrategy,
    BasicClientStrategy,
    PrismaService,
    AuthClientService,
  ],
})
export class AuthModule {}
