import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseBalanceController } from './expense-balance.controller';

describe('ExpenseBalanceController', () => {
  let controller: ExpenseBalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseBalanceController],
    }).compile();

    controller = module.get<ExpenseBalanceController>(ExpenseBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
