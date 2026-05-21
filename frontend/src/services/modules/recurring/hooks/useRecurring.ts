import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { recurringService } from "../services/recurring.service";
import type { CreateRecurringRuleDto, UpdateRecurringRuleDto } from "../types/recurring.types";

export const useRecurring = () => {
    const queryClient = useQueryClient();

    const useGetRecurringRules = () => 
        useQuery({
            queryKey: ["recurring"],
            queryFn: recurringService.getAll,
        });

    const useCreateRecurringRule = () =>
        useMutation({
            mutationFn: (data: CreateRecurringRuleDto) => recurringService.create(data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["recurring"] });
            },
        });

    const useUpdateRecurringRule = () =>
        useMutation({
            mutationFn: ({ id, data }: { id: number; data: UpdateRecurringRuleDto }) =>
                recurringService.update(id, data),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["recurring"] });
            },
        });

    const useDeleteRecurringRule = () =>
        useMutation({
            mutationFn: (id: number) => recurringService.delete(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["recurring"] });
            },
        });

    return {
        useGetRecurringRules,
        useCreateRecurringRule,
        useUpdateRecurringRule,
        useDeleteRecurringRule,
    };
};
