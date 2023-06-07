import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCompanyService } from 'src/auth/company/auth-company.service';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import { CreatedProductDto } from '../../dto/created-product.dto';

@Injectable()
export class CreateProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authLogin: AuthCompanyService,
  ) {}

  async handle(
    cnpj: string,
    password: string,
    data: CreateProductDto,
  ): Promise<CreatedProductDto> {
    const isValid = await this.authLogin.validateUser(cnpj, password);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const companyId = await this.prisma.company.findUnique({
      where: {
        id: data.companyId,
      },
    });

    if (!companyId) {
      throw new Error('Company not exits');
    }

    const product = await this.prisma.product.create({
      data: {
        ...data,
        companyId: data.companyId,
      },
    });

    return product;
  }
}
