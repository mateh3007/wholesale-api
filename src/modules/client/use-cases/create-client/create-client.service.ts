import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RegisterClientDto } from '../../dto/register-client.dto';

@Injectable()
export class RegisterClientService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(data: RegisterClientDto) {
    const clientAlreadyExists = await this.prisma.client.findUnique({
      where: {
        email: data.email,
      },
    });

    if (clientAlreadyExists) {
      throw new Error('client already exists');
    }

    const createdClient = await this.prisma.client.create({
      data: {
        ...data,
      },
    });
    return createdClient;
  }
}
