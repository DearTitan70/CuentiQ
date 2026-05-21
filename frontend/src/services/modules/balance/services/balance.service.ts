import { api } from "../../../api";
import type { AccountBalance, BalancesByType } from "../types/balance.types";

export const balanceService = {
    async getTotal(): Promise<number> {
        const res = await api.get<number>("/balance/total");
        return res.data;
    },

    async getAccounts(): Promise<AccountBalance[]> {
        const res = await api.get<AccountBalance[]>("/balance/accounts");
        return res.data;
    },

    async getByType(): Promise<BalancesByType> {
        const res = await api.get<BalancesByType>("/balance/type");
        return res.data;
    }
};
