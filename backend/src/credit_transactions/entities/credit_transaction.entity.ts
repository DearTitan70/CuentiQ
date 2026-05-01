import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Credit } from '../../credits/entities/credit.entity/credit.entity';

@Entity()
export class CreditTransaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => Credit)
    credit: Credit;
}