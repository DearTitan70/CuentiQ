import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RecurringRule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    frequency: string; // monthly, weekly

    @Column()
    amount: number;
}