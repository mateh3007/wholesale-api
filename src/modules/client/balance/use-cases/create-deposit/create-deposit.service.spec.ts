import { Test, TestingModule } from '@nestjs/testing';
import { CreateDepositService } from './create-deposit.service';

describe('CreateDepositService', () => {
  let service: CreateDepositService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDepositService],
    }).compile();

    service = module.get<CreateDepositService>(CreateDepositService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
