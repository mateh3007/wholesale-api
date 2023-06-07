import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PlaceOrderDto } from '../../dto/place-order.dto';
import { AuthClientService } from 'src/auth/client/auth-client.service';

@Injectable()
export class PlaceOrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authClientLogin: AuthClientService,
  ) {}

  async handle(email, password, data: PlaceOrderDto) {
    const isValid = await this.authClientLogin.validateUser(email, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const client = await this.prisma.client.findUnique({
      where: {
        id: data.clientId,
      },
    });

    const product = await this.prisma.product.findFirst({
      where: {
        id: data.productId,
      },
    });

    if (!product.isActive) {
      throw new UnauthorizedException('Product not available');
    }

    const price = product.price * data.quantity;

    const amountMoney = data.amountMoney;

    if (amountMoney < price) {
      throw new UnauthorizedException(
        'please make sure the given money has reached the expected amount',
      );
    }

    if (client.balance < price) {
      throw new UnauthorizedException('insufficient funds');
    }

    await this.prisma.productSale.create({
      data: {
        companyId: product.companyId,
        productName: product.name,
        productId: data.productId,
        clientId: data.clientId,
        quantity: data.quantity,
        price,
        date: new Date(),
      },
    });

    await this.prisma.product.update({
      where: {
        id: data.productId,
      },
      data: {
        isActive: false,
      },
    });

    const change: number = data.amountMoney - price;

    const newBalance: number = client.balance - price + change;

    await this.prisma.client.update({
      where: { id: client.id },
      data: { balance: newBalance },
    });

    return 'Compra finalizada com sucesso';
  }
}
