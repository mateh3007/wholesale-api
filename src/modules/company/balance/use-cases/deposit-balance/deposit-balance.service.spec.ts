import { Test, TestingModule } from '@nestjs/testing';
import { DepositBalanceService } from './deposit-balance.service';

describe('DepositBalanceService', () => {
  let service: DepositBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositBalanceService],
    }).compile();

    service = module.get<DepositBalanceService>(DepositBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
