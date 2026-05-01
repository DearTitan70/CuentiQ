import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Account } from '../../../accounts/entities/account.entity/account.entity';
import { Category } from '../../../categories/entities/categorie.entity/categorie.entity';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Account)
    account: Account;

    @ManyToOne(() => Category)
    category: Category;
}