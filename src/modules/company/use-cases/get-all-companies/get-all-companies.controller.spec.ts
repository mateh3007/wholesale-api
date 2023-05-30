import { Test, TestingModule } from '@nestjs/testing';
import { GetAllCompaniesController } from './get-all-companies.controller';

describe('GetAllCompaniesController', () => {
  let controller: GetAllCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllCompaniesController],
    }).compile();

    controller = module.get<GetAllCompaniesController>(GetAllCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
