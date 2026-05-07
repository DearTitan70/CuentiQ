import { Controller, Get } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) { }

  @Get('total')
  getTotalBalance() {
    return this.balanceService.getTotalBalance();
  }

  @Get('accounts')
  getAccountsBalance() {
    return this.balanceService.getAccountsBalance();
  }

  @Get('type')
  getBalancesByType() {
    return this.balanceService.getBalancesByType();
  }
}
