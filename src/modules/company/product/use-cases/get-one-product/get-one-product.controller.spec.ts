import { Test, TestingModule } from '@nestjs/testing';
import { GetOneProductService } from './get-one-product.controller';

describe('GetOneCompanyController', () => {
  let controller: GetOneProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOneProductService],
    }).compile();

    controller = module.get<GetOneProductService>(GetOneProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
