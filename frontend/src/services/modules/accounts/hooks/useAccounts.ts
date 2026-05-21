import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { accountsService } from "../services/accounts.service";
import type { CreateAccountDto, UpdateAccountDto } from "../types/accounts.types";

export const useAccounts = () => {
    const queryClient = useQueryClient();

    const useGetAccounts = () =>
        useQuery({
            queryKey: ["accounts"],
            queryFn: accountsService.getAll,
        });

    const useCreateAccount = () =>
        useMutation({
            mutationFn: (data: CreateAccountDto) => accountsService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["accounts"] });
            },
        });

    return {
        useGetAccounts,
        useCreateAccount,
    };
};
