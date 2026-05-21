import { api } from "../../../api";
import type { CreditTransaction, CreateCreditTransactionDto } from "../types/credit_transactions.types";

export const creditTransactionsService = {
    async getAll(): Promise<CreditTransaction[]> {
        const res = await api.get<CreditTransaction[]>("/credit-transactions");
        return res.data;
    },

    async create(data: CreateCreditTransactionDto): Promise<CreditTransaction> {
        const res = await api.post<CreditTransaction>("/credit-transactions", data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/credit-transactions/${id}`);
    }
};
