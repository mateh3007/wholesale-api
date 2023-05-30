import { Test, TestingModule } from '@nestjs/testing';
import { GetOneCompanyService } from './get-one-company.service';

describe('GetOneCompanyService', () => {
  let service: GetOneCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetOneCompanyService],
    }).compile();

    service = module.get<GetOneCompanyService>(GetOneCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
