import { Controller, Get, HttpCode } from '@nestjs/common';
import { GetAllCompaniesService } from './get-all-companies.service';

@Controller('getAll')
export class GetAllCompaniesController {
  constructor(private readonly service: GetAllCompaniesService) {}

  @HttpCode(200)
  @Get()
  async handle() {
    return this.service.handle();
  }
}
