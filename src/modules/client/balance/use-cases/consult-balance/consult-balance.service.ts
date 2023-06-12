import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthClientService } from 'src/auth/client/auth-client.service';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ConsultBalanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthClientService,
  ) {}

  async handle(email: string, password: string) {
    const isValid = await this.authLogin.validateUser(email, password);
    if (!isValid) {
      throw new UnauthorizedException('Credencias inválidas');
    }

    return isValid.balance;
  }
}
