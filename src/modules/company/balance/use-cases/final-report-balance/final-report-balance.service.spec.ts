import { Test, TestingModule } from '@nestjs/testing';
import { FinalReportBalanceService } from './final-report-balance.service';

describe('FinalReportBalanceService', () => {
  let service: FinalReportBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalReportBalanceService],
    }).compile();

    service = module.get<FinalReportBalanceService>(FinalReportBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
