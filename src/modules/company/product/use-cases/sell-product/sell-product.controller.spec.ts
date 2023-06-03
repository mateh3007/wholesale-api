import { Test, TestingModule } from '@nestjs/testing';
import { SellProductController } from './sell-product.controller';

describe('SellProductController', () => {
  let controller: SellProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellProductController],
    }).compile();

    controller = module.get<SellProductController>(SellProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
