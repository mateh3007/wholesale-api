import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthClientService } from 'src/auth/client/auth-client.service';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PurchasesHistoricService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthClientService,
  ) {}

  async handle(email, password) {
    const isValid = await this.authLogin.validateUser(email, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const purchasesHistoric = await this.prisma.productSale.findMany();

    return purchasesHistoric;
  }
}
