import { Test, TestingModule } from '@nestjs/testing';
import { FinalReportBalanceController } from './final-report-balance.controller';

describe('FinalReportBalanceController', () => {
  let controller: FinalReportBalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalReportBalanceController],
    }).compile();

    controller = module.get<FinalReportBalanceController>(FinalReportBalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
