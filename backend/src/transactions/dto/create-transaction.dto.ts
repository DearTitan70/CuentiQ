export class CreateTransactionDto {
    description: string;
    amount: number;
    type: "Ingreso" | "Gasto" | "Transferencia";
    categoryId: number;
    accountId: number;
    affects_balance: "Ahorro" | "Libre";
    destination_balance?: "Ahorro" | "Libre";
    date: Date;
}
