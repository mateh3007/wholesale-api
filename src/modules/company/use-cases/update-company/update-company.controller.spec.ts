import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCompanyController } from './update-company.controller';

describe('UpdateCompanyController', () => {
  let controller: UpdateCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateCompanyController],
    }).compile();

    controller = module.get<UpdateCompanyController>(UpdateCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
