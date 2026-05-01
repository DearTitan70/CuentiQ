import { Test, TestingModule } from '@nestjs/testing';
import { CreditTransactionsController } from './credit_transactions.controller';

describe('CreditTransactionsController', () => {
  let controller: CreditTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditTransactionsController],
    }).compile();

    controller = module.get<CreditTransactionsController>(CreditTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
