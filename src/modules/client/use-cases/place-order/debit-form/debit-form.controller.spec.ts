import { Test, TestingModule } from '@nestjs/testing';
import { DebitFormController } from './debit-form.controller';

describe('DebitFormController', () => {
  let controller: DebitFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebitFormController],
    }).compile();

    controller = module.get<DebitFormController>(DebitFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
