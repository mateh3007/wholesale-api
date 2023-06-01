import { Test, TestingModule } from '@nestjs/testing';
import { ConsultBalanceController } from './consult-balance.controller';

describe('ConsultBalanceController', () => {
  let controller: ConsultBalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultBalanceController],
    }).compile();

    controller = module.get<ConsultBalanceController>(ConsultBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
