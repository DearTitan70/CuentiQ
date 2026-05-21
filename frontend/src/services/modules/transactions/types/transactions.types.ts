import type { Category } from "../../categories/types/categories.types";
import type { Account } from "../../accounts/types/accounts.types";

export type TransactionType = "Ingreso" | "Gasto" | "Transferencia";
export type BalanceType = "Ahorro" | "Libre";

export interface Transaction {
    id: number;
    description: string;
    amount: number;
    type: TransactionType;
    categoryId: number;
    category: Category;
    accountId: number;
    account: Account;
    affects_balance: BalanceType;
    destination_balance?: BalanceType | "";
    created_at: string;
}

export interface CreateTransactionDto {
    description: string;
    amount: number;
    type: TransactionType;
    categoryId: number;
    accountId: number;
    affects_balance: BalanceType;
    destination_balance?: BalanceType;
    date: string;
}

export interface UpdateTransactionDto extends Partial<CreateTransactionDto> { }
