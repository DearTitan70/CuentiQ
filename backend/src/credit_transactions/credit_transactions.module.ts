import { Module } from '@nestjs/common';
import { CreditTransactionsService } from './credit_transactions.service';
import { CreditTransactionsController } from './credit_transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditTransaction } from './entities/credit_transaction.entity';

@Module({
  providers: [CreditTransactionsService],
  controllers: [CreditTransactionsController],
  imports: [TypeOrmModule.forFeature([CreditTransaction])],
})
export class CreditTransactionsModule { }
