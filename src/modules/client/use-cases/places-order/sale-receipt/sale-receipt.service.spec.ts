import { Test, TestingModule } from '@nestjs/testing';
import { SaleReceiptService } from './sale-receipt.service';

describe('SaleReceiptService', () => {
  let service: SaleReceiptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleReceiptService],
    }).compile();

    service = module.get<SaleReceiptService>(SaleReceiptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
