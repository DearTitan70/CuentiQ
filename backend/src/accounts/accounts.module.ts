import { Module } from '@nestjs/common';
import { Account } from './entities/account.entity/account.entity';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [AccountsService],
  controllers: [AccountsController],
  imports: [TypeOrmModule.forFeature([Account])],
})
export class AccountsModule { }
