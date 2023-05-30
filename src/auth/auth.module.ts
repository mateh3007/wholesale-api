import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BasicAuthStrategy } from './strategy/basic.strategy';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'basic' })],
  controllers: [AuthController],
  providers: [AuthService, BasicAuthStrategy, PrismaService],
})
export class AuthModule {}
