import { Test, TestingModule } from '@nestjs/testing';
import { EditAccountService } from './edit-account.service';

describe('EditAccountService', () => {
  let service: EditAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditAccountService],
    }).compile();

    service = module.get<EditAccountService>(EditAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
