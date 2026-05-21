export interface RecurringRule {
    id: number;
    frequency: string;
    amount: number;
}

export interface CreateRecurringRuleDto {
    frequency: string;
    amount: number;
}

export interface UpdateRecurringRuleDto extends Partial<CreateRecurringRuleDto> {}
