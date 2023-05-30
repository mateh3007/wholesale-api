import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetAllCompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async handle() {
    return await this.prisma.company.findMany();
  }
}
