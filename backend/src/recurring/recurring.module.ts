import { Module } from '@nestjs/common';
import { RecurringService } from './recurring.service';
import { RecurringController } from './recurring.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurringRule } from './entities/recurring.entity/recurring.entity';

@Module({
  providers: [RecurringService],
  controllers: [RecurringController],
  imports: [TypeOrmModule.forFeature([RecurringRule])],
})
export class RecurringModule { }
