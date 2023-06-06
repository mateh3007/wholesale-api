import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AccountDto } from '../../dto/account.dto';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: AccountDto) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: data.id,
      },
    });

    const productSales = await this.prisma.productSale.findMany({
      where: {
        clientId: client.id,
      },
    });

    return { client, productSales };
  }
}
