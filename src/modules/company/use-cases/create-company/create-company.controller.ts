import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompanyService } from './create-company.service';
import { CreateCompanyDto } from '../../dto/create-company.dto';
import { CreatedCompanyDto } from '../../dto/created-company.dto';

@Controller('create')
export class CreateCompanyController {
  constructor(private readonly service: CreateCompanyService) {}

  @Post()
  async handle(@Body() data: CreateCompanyDto): Promise<CreatedCompanyDto> {
    return await this.service.handle(data);
  }
}
