import { Body, Controller, Delete } from '@nestjs/common';
import { DeleteCompanyService } from './delete-company.service';
import { DeleteCompanyDto } from '../../dto/delete-company.dto';

@Controller('delete')
export class DeleteCompanyController {
  constructor(private readonly service: DeleteCompanyService) {}

  @Delete()
  async handle(@Body() body: DeleteCompanyDto) {
    return await this.service.handle(body);
  }
}
