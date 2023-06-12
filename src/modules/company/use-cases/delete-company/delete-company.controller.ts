import { Body, Controller, Delete, HttpCode } from '@nestjs/common';
import { DeleteCompanyService } from './delete-company.service';
import { DeleteCompanyDto } from '../../dto/delete-company.dto';

@Controller('delete')
export class DeleteCompanyController {
  constructor(private readonly service: DeleteCompanyService) {}

  @HttpCode(204)
  @Delete()
  async handle(@Body() body: DeleteCompanyDto) {
    return await this.service.handle(body);
  }
}
