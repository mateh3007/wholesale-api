import { Test, TestingModule } from '@nestjs/testing';
import { GetOneCompanyController } from './get-one-company.controller';

describe('GetOneCompanyController', () => {
  let controller: GetOneCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOneCompanyController],
    }).compile();

    controller = module.get<GetOneCompanyController>(GetOneCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
