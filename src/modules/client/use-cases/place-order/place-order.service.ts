import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { PlaceOrderDto } from '../../dto/place-order.dto';

@Injectable()
export class PlaceOrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authClientLogin: AuthService,
  ) {}

  async handle(data: PlaceOrderDto) {
    // const isValid = await this.authClientLogin.validateUser(email, password);
    // if (!isValid) {
    //   throw new UnauthorizedException('Credenciais inválidas');
    // }

    const product = await this.prisma.product.findFirst({
      where: {
        id: data.productId,
      },
    });

    const price = product.price * data.quantity;

    const amountMoney = data.amountMoney;

    if (amountMoney < price) {
      throw new UnauthorizedException(
        'please make sure the given money has reached the expected amount',
      );
    }

    await this.prisma.productSale.create({
      data: {
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

    return 'Compra finalizada com sucesso';
  }
}
