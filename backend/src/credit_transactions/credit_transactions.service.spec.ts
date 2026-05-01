import { Test, TestingModule } from '@nestjs/testing';
import { CreditTransactionsService } from './credit_transactions.service';

describe('CreditTransactionsService', () => {
  let service: CreditTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditTransactionsService],
    }).compile();

    service = module.get<CreditTransactionsService>(CreditTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
