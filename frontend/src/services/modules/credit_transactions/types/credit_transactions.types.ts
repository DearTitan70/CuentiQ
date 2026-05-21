import type { Credit } from "../../credits/types/credits.types";

export interface CreditTransaction {
    id: number;
    amount: number;
    credit: Credit;
}

export interface CreateCreditTransactionDto {
    amount: number;
    creditId: number;
}
