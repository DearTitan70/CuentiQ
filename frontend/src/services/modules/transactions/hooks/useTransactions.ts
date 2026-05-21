import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsService } from "../services/transactions.service";
import type { CreateTransactionDto, UpdateTransactionDto } from "../types/transactions.types";

export const useTransactions = () => {
    const queryClient = useQueryClient();

    const useGetTransactions = () => 
        useQuery({
            queryKey: ["transactions"],
            queryFn: transactionsService.getAll,
        });

    const useGetTransaction = (id: number) =>
        useQuery({
            queryKey: ["transactions", id],
            queryFn: () => transactionsService.getById(id),
            enabled: !!id,
        });

    const useCreateTransaction = () =>
        useMutation({
            mutationFn: (data: CreateTransactionDto) => transactionsService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["transactions"] });
                queryClient.invalidateQueries({ queryKey: ["balance"] });
                queryClient.invalidateQueries({ queryKey: ["accounts"] });
            },
        });

    const useUpdateTransaction = () =>
        useMutation({
            mutationFn: ({ id, data }: { id: number; data: UpdateTransactionDto }) =>
                transactionsService.update(id, data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["transactions"] });
                queryClient.invalidateQueries({ queryKey: ["balance"] });
                queryClient.invalidateQueries({ queryKey: ["accounts"] });
            },
        });

    const useDeleteTransaction = () =>
        useMutation({
            mutationFn: (id: number) => transactionsService.delete(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["transactions"] });
                queryClient.invalidateQueries({ queryKey: ["balance"] });
                queryClient.invalidateQueries({ queryKey: ["accounts"] });
            },
        });

    return {
        useGetTransactions,
        useGetTransaction,
        useCreateTransaction,
        useUpdateTransaction,
        useDeleteTransaction,
    };
};
