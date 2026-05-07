import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly repo: Repository<Transaction>,
    ) { }

    async create(data: CreateTransactionDto) {
        const transaction = this.repo.create({
            description: data.description,
            amount: data.amount,
            type: data.type,
            categoryId: data.categoryId,
            accountId: data.accountId,
            affects_balance: data.affects_balance,
            destination_balance: data.destination_balance,
            created_at: data.date,
        });
        return this.repo.save(transaction);
    }

    async findAll() {
        return this.repo.find();
    }
}
