import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity/account.entity';

import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private readonly repo: Repository<Account>,
    ) { }
    async create(data: CreateAccountDto) {
        const account = this.repo.create(data);
        return this.repo.save(account);
    }

    async findAll() {
        return this.repo.find();
    }
}
