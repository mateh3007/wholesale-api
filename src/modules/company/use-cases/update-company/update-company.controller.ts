import { Body, Controller, HttpCode, Put } from '@nestjs/common';
import { UpdateCompanyService } from './update-company.service';
import { UpdateCompanyDto } from '../../dto/update-company.dto';
import { CreatedCompanyDto } from '../../dto/created-company.dto';

@Controller('update')
export class UpdateCompanyController {
  constructor(private readonly service: UpdateCompanyService) {}

  @HttpCode(200)
  @Put()
  async handle(@Body() body: UpdateCompanyDto): Promise<CreatedCompanyDto> {
    return await this.service.handle(body);
  }
}
