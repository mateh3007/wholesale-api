import { Test, TestingModule } from '@nestjs/testing';
import { CreditFormController } from './credit-form.controller';

describe('CreditFormController', () => {
  let controller: CreditFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditFormController],
    }).compile();

    controller = module.get<CreditFormController>(CreditFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
