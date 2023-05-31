import { Test, TestingModule } from '@nestjs/testing';
import { GetOneProductController } from './get-one-product.controller';

describe('GetOneProductController', () => {
  let controller: GetOneProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetOneProductController],
    }).compile();

    controller = module.get<GetOneProductController>(GetOneProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
