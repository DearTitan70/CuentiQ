import { api } from "../../../api";
import type { Transaction, CreateTransactionDto, UpdateTransactionDto } from "../types/transactions.types";

export const transactionsService = {
    async getAll(): Promise<Transaction[]> {
        const res = await api.get<Transaction[]>("/transactions");
        return res.data;
    },

    async getById(id: number): Promise<Transaction> {
        const res = await api.get<Transaction>(`/transactions/${id}`);
        return res.data;
    },

    async create(data: CreateTransactionDto): Promise<Transaction> {
        const res = await api.post<Transaction>("/transactions", data);
        return res.data;
    },

    async update(id: number, data: UpdateTransactionDto): Promise<Transaction> {
        const res = await api.patch<Transaction>(`/transactions/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/transactions/${id}`);
    }
};
