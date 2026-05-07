import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Account } from 'src/accounts/entities/account.entity/account.entity';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Account])],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule { }
