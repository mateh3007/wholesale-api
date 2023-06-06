import { Test, TestingModule } from '@nestjs/testing';
import { EditAccountController } from './edit-account.controller';

describe('EditAccountController', () => {
  let controller: EditAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditAccountController],
    }).compile();

    controller = module.get<EditAccountController>(EditAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
