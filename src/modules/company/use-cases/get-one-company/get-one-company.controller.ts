import { Body, Controller, Get } from '@nestjs/common';
import { GetOneCompanyService } from './get-one-company.service';
import { GetOneCompanyDto } from '../../dto/get-one-company.dto';
import { CreatedCompanyDto } from '../../dto/created-company.dto';

@Controller('getOne')
export class GetOneCompanyController {
  constructor(private readonly service: GetOneCompanyService) {}

  @Get()
  async handle(@Body() body: GetOneCompanyDto): Promise<CreatedCompanyDto> {
    return await this.service.handle(body);
  }
}
