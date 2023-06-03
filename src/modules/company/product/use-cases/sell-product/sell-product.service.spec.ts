import { Test, TestingModule } from '@nestjs/testing';
import { SellProductService } from './sell-product.service';

describe('SellProductService', () => {
  let service: SellProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellProductService],
    }).compile();

    service = module.get<SellProductService>(SellProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
