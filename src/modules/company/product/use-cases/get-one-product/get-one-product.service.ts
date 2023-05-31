import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GetOneProductDto } from '../../dto/get-one-product.dto';

@Injectable()
export class GetOneProductService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: GetOneProductDto) {
    const product = await this.prisma.product.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!product) {
      throw new Error('Product not exists or not registered');
    }

    return product;
  }
}
