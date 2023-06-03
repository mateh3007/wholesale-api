import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDepositDto } from 'src/modules/client/dto/create-deposit.dto';

@Injectable()
export class CreateDepositService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: CreateDepositDto) {
    const clientExists = await this.prisma.client.findUnique({
      where: {
        id: data.id,
      },
    });

    if (!clientExists) {
      throw new Error('Client not exists');
    }

    const newBalance: number = clientExists.balance + data.amount;

    const updatedClient = await this.prisma.client.update({
      where: {
        id: clientExists.id,
      },
      data: {
        balance: newBalance,
      },
    });

    return updatedClient;
  }
}
