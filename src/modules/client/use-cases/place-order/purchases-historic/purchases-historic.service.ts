import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PurchasesHistoricService {
  constructor(private readonly prisma: PrismaService) {}

  async handle() {
    const purchasesHistoric = await this.prisma.productSale.findMany();

    return purchasesHistoric;
  }
}
