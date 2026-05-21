import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { creditTransactionsService } from "../services/credit_transactions.service";
import type { CreateCreditTransactionDto } from "../types/credit_transactions.types";

export const useCreditTransactions = () => {
    const queryClient = useQueryClient();

    const useGetCreditTransactions = () => 
        useQuery({
            queryKey: ["credit-transactions"],
            queryFn: creditTransactionsService.getAll,
        });

    const useCreateCreditTransaction = () =>
        useMutation({
            mutationFn: (data: CreateCreditTransactionDto) => creditTransactionsService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["credit-transactions"] });
                queryClient.invalidateQueries({ queryKey: ["credits"] });
            },
        });

    const useDeleteCreditTransaction = () =>
        useMutation({
            mutationFn: (id: number) => creditTransactionsService.delete(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["credit-transactions"] });
                queryClient.invalidateQueries({ queryKey: ["credits"] });
            },
        });

    return {
        useGetCreditTransactions,
        useCreateCreditTransaction,
        useDeleteCreditTransaction,
    };
};
