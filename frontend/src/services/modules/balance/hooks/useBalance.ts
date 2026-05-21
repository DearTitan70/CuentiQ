import { useQuery } from "@tanstack/react-query";
import { balanceService } from "../services/balance.service";

export const useBalance = () => {
    const useGetTotalBalance = () =>
        useQuery({
            queryKey: ["balance", "total"],
            queryFn: balanceService.getTotal,
        });

    const useGetAccountsBalance = () =>
        useQuery({
            queryKey: ["balance", "accounts"],
            queryFn: balanceService.getAccounts,
        });

    const useGetBalancesByType = () =>
        useQuery({
            queryKey: ["balance", "type"],
            queryFn: balanceService.getByType,
        });

    return {
        useGetTotalBalance,
        useGetAccountsBalance,
        useGetBalancesByType,
    };
};
