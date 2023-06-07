import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthClientService } from 'src/auth/client/auth-client.service';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDepositDto } from 'src/modules/client/dto/create-deposit.dto';

@Injectable()
export class CreateDepositService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthClientService,
  ) {}

  async handle(email: string, password: string, data: CreateDepositDto) {
    const isValid = await this.authLogin.validateUser(email, password);
    if (!isValid) {
      throw new UnauthorizedException('Credencias inválidas');
    }

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
