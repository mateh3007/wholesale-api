import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCompanyService } from './delete-company.service';

describe('DeleteCompanyService', () => {
  let service: DeleteCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCompanyService],
    }).compile();

    service = module.get<DeleteCompanyService>(DeleteCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
