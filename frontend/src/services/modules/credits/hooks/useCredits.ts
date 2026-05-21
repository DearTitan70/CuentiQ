import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { creditsService } from "../services/credits.service";
import type { CreateCreditDto, UpdateCreditDto } from "../types/credits.types";

export const useCredits = () => {
    const queryClient = useQueryClient();

    const useGetCredits = () => 
        useQuery({
            queryKey: ["credits"],
            queryFn: creditsService.getAll,
        });

    const useGetCredit = (id: number) =>
        useQuery({
            queryKey: ["credits", id],
            queryFn: () => creditsService.getById(id),
            enabled: !!id,
        });

    const useCreateCredit = () =>
        useMutation({
            mutationFn: (data: CreateCreditDto) => creditsService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["credits"] });
            },
        });

    const useUpdateCredit = () =>
        useMutation({
            mutationFn: ({ id, data }: { id: number; data: UpdateCreditDto }) =>
                creditsService.update(id, data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["credits"] });
            },
        });

    const useDeleteCredit = () =>
        useMutation({
            mutationFn: (id: number) => creditsService.delete(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["credits"] });
            },
        });

    return {
        useGetCredits,
        useGetCredit,
        useCreateCredit,
        useUpdateCredit,
        useDeleteCredit,
    };
};
