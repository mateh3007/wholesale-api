import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateProductDto } from '../../dto/update-product.dto';
import { CreatedProductDto } from '../../dto/created-product.dto';

@Injectable()
export class UpdateProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthService,
  ) {}

  async handle(
    cnpj,
    password,
    data: UpdateProductDto,
  ): Promise<CreatedProductDto> {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const product = await this.prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        amount: data.amount,
        brand: data.brand,
        category: data.category,
      },
    });

    return product;
  }
}
