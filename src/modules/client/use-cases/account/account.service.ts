import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AccountDto } from '../../dto/account.dto';
import { AuthClientService } from 'src/auth/client/auth-client.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthClientService,
  ) {}

  async handle(email, password, data: AccountDto) {
    const isValid = await this.authLogin.validateUser(email, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
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
