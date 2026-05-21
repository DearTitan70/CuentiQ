import { api } from "../../../api";
import type { Account, CreateAccountDto } from "../types/accounts.types";

export const accountsService = {
    async getAll(): Promise<Account[]> {
        const res = await api.get<Account[]>("/accounts");
        return res.data;
    },

    async create(data: CreateAccountDto): Promise<Account> {
        const res = await api.post<Account>("/accounts", data);
        return res.data;
    }
};
