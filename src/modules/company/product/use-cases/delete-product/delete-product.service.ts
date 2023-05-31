import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { DeleteProductDto } from '../../dto/delete-product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class DeleteProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthService,
  ) {}

  async handle(cnpj, password, data: DeleteProductDto) {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const product = await this.prisma.product.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!product) {
      throw new Error('Product not exists or not registered');
    }

    return await this.prisma.product.delete({
      where: {
        id: data.id,
      },
    });
  }
}
