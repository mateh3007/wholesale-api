import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterClientController } from './use-cases/create-client/create-client.controller';
import { RegisterClientService } from './use-cases/create-client/create-client.service';

@Module({
  controllers: [RegisterClientController],
  providers: [RegisterClientService, PrismaService],
})
export class ClientModule {}
