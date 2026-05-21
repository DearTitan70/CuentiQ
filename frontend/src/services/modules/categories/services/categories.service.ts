import { api } from "../../../api";
import type { Category, CreateCategoryDto, UpdateCategoryDto } from "../types/categories.types";

export const categoriesService = {
    async getAll(): Promise<Category[]> {
        const res = await api.get<Category[]>("/categories");
        return res.data;
    },

    async getById(id: number): Promise<Category> {
        const res = await api.get<Category>(`/categories/${id}`);
        return res.data;
    },

    async create(data: CreateCategoryDto): Promise<Category> {
        const res = await api.post<Category>("/categories", data);
        return res.data;
    },

    async update(id: number, data: UpdateCategoryDto): Promise<Category> {
        const res = await api.patch<Category>(`/categories/${id}`, data);
        return res.data;
    },

    async delete(id: number): Promise<void> {
        await api.delete(`/categories/${id}`);
    }
};
