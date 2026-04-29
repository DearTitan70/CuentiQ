import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app/app.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AppModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
