import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Account } from 'src/accounts/entities/account.entity/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalanceService {
    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepo: Repository<Transaction>,
        @InjectRepository(Account)
        private readonly accountRepo: Repository<Account>,
    ) { }

    async getTotalBalance() {
        const transactions = await this.transactionRepo.find();
        return transactions.reduce((acc, transaction) => {
            const amount = Number(transaction.amount);
            if (transaction.type === 'Ingreso') return acc + amount;
            if (transaction.type === 'Gasto') return acc - amount;
            return acc;
        }, 0);
    }

    async getAccountsBalance() {
        const accounts = await this.accountRepo.find();
        const balancePromises = accounts.map(async (account) => {
            const transactions = await this.transactionRepo.find({
                where: { accountId: account.id },
            });
            const total = transactions.reduce((acc, transaction) => {
                const amount = Number(transaction.amount);
                if (transaction.type === 'Ingreso') return acc + amount;
                if (transaction.type === 'Gasto') return acc - amount;
                return acc;
            }, 0);
            return { account: account.name, balance: total };
        });
        return Promise.all(balancePromises);
    }

    async getBalancesByType() {
        const transactions = await this.transactionRepo.find();
        return transactions.reduce((acc, transaction) => {
            const amount = Number(transaction.amount);
            if (transaction.type === 'Ingreso') {
                if (transaction.affects_balance === 'Ahorro') acc.ahorro += amount;
                if (transaction.affects_balance === 'Libre') acc.libre += amount;
            } else if (transaction.type === 'Gasto') {
                if (transaction.affects_balance === 'Ahorro') acc.ahorro -= amount;
                if (transaction.affects_balance === 'Libre') acc.libre -= amount;
            } else if (transaction.type === 'Transferencia') {
                if (transaction.affects_balance === 'Ahorro') acc.ahorro -= amount;
                if (transaction.affects_balance === 'Libre') acc.libre -= amount;
                if (transaction.destination_balance === 'Ahorro') acc.ahorro += amount;
                if (transaction.destination_balance === 'Libre') acc.libre += amount;
            }
            return acc;
        }, { ahorro: 0, libre: 0 });
    }
}
