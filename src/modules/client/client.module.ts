import { Module } from '@nestjs/common';
import { CreateClientController } from './use-cases/create-client/create-client.controller';
import { CreateClientService } from './use-cases/create-client/create-client.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [CreateClientController],
  providers: [CreateClientService, PrismaService],
})
export class ClientModule {}
