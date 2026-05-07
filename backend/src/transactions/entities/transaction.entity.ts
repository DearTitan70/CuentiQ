import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from 'src/categories/entities/categorie.entity/categorie.entity';
import { Account } from 'src/accounts/entities/account.entity/account.entity';


@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column("decimal")
    amount: number;

    @Column({
        type: "enum",
        enum: ["Ingreso", "Gasto", "Transferencia"]
    })
    type: "Ingreso" | "Gasto" | "Transferencia";

    @Column({ name: "category_id" })
    categoryId: number;

    @ManyToOne(() => Category, {
        eager: true
    })
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column({ name: "account_id" })
    accountId: number;

    @ManyToOne(() => Account, {
        eager: true
    })
    @JoinColumn({ name: "account_id" })
    account: Account;

    @Column({
        type: "enum",
        enum: ["Ahorro", "Libre"]
    })
    affects_balance: "Ahorro" | "Libre";

    @Column({
        type: "enum",
        enum: ["Ahorro", "Libre", ""],
        nullable: true
    })
    destination_balance: "Ahorro" | "Libre" | "";

    @CreateDateColumn()
    created_at: Date;
}