import { Test, TestingModule } from '@nestjs/testing';
import { GetAllCompaniesService } from './get-all-companies.service';

describe('GetAllCompaniesService', () => {
  let service: GetAllCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllCompaniesService],
    }).compile();

    service = module.get<GetAllCompaniesService>(GetAllCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
