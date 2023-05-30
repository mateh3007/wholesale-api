import { Controller, Get } from '@nestjs/common';
import { GetAllCompaniesService } from './get-all-companies.service';

@Controller('getAll')
export class GetAllCompaniesController {
  constructor(private readonly service: GetAllCompaniesService) {}

  @Get()
  async handle() {
    return this.service.handle();
  }
}
