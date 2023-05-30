import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCompanyController } from './delete-company.controller';

describe('DeleteCompanyController', () => {
  let controller: DeleteCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteCompanyController],
    }).compile();

    controller = module.get<DeleteCompanyController>(DeleteCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
