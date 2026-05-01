import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity/credit.entity';
import { CreditsService } from './credits.service';
import { CreditsController } from './credits.controller';

@Module({
  providers: [CreditsService],
  controllers: [CreditsController],
  imports: [TypeOrmModule.forFeature([Credit])],
})
export class CreditsModule { }
