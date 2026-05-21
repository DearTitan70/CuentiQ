import { api } from "../../../api";
import type { RecurringRule, CreateRecurringRuleDto, UpdateRecurringRuleDto } from "../types/recurring.types";

export const recurringService = {
    async getAll(): Promise<RecurringRule[]> {
        const res = await api.get<RecurringRule[]>("/recurring");
        return res.data;
    },

    async create(data: CreateRecurringRuleDto): Promise<RecurringRule> {
        const res = await api.post<RecurringRule>("/recurring", data);
        return res.data;
    },

    async update(id: number, data: UpdateRecurringRuleDto): Promise<RecurringRule> {
        const res = await api.patch<RecurringRule>(`/recurring/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/recurring/${id}`);
    }
};
