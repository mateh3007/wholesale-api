import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseBalanceService } from './expense-balance.service';

describe('ExpenseBalanceService', () => {
  let service: ExpenseBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseBalanceService],
    }).compile();

    service = module.get<ExpenseBalanceService>(ExpenseBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
