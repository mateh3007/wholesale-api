import { Test, TestingModule } from '@nestjs/testing';
import { DepositBalanceController } from './deposit-balance.controller';

describe('DepositBalanceController', () => {
  let controller: DepositBalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositBalanceController],
    }).compile();

    controller = module.get<DepositBalanceController>(DepositBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
