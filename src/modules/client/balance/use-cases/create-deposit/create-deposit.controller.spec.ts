import { Test, TestingModule } from '@nestjs/testing';
import { CreateDepositController } from './create-deposit.controller';

describe('CreateDepositController', () => {
  let controller: CreateDepositController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateDepositController],
    }).compile();

    controller = module.get<CreateDepositController>(CreateDepositController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
