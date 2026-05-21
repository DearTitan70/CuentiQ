import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriesService } from "../services/categories.service";
import type { CreateCategoryDto, UpdateCategoryDto } from "../types/categories.types";

export const useCategories = () => {
    const queryClient = useQueryClient();

    const useGetCategories = () => 
        useQuery({
            queryKey: ["categories"],
            queryFn: categoriesService.getAll,
        });

    const useGetCategory = (id: number) =>
        useQuery({
            queryKey: ["categories", id],
            queryFn: () => categoriesService.getById(id),
            enabled: !!id,
        });

    const useCreateCategory = () =>
        useMutation({
            mutationFn: (data: CreateCategoryDto) => categoriesService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["categories"] });
            },
        });

    const useUpdateCategory = () =>
        useMutation({
            mutationFn: ({ id, data }: { id: number; data: UpdateCategoryDto }) =>
                categoriesService.update(id, data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["categories"] });
            },
        });

    const useDeleteCategory = () =>
        useMutation({
            mutationFn: (id: number) => categoriesService.delete(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["categories"] });
            },
        });

    return {
        useGetCategories,
        useGetCategory,
        useCreateCategory,
        useUpdateCategory,
        useDeleteCategory,
    };
};
