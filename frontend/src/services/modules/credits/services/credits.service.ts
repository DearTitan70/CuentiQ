import { api } from "../../../api";
import type { Credit, CreateCreditDto, UpdateCreditDto } from "../types/credits.types";

export const creditsService = {
    async getAll(): Promise<Credit[]> {
        const res = await api.get<Credit[]>("/credits");
        return res.data;
    },

    async getById(id: number): Promise<Credit> {
        const res = await api.get<Credit>(`/credits/${id}`);
        return res.data;
    },

    async create(data: CreateCreditDto): Promise<Credit> {
        const res = await api.post<Credit>("/credits", data);
        return res.data;
    },

    async update(id: number, data: UpdateCreditDto): Promise<Credit> {
        const res = await api.patch<Credit>(`/credits/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/credits/${id}`);
    }
};
