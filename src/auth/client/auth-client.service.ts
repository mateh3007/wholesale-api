import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthClientService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(email: string, password: string) {
    const isValid = await this.prisma.client.findFirst({
      where: {
        email,
        password,
      },
    });

    if (isValid) {
      return isValid;
    }
    return null;
  }
}
