export interface Credit {
    id: number;
    name: string;
    limit: number;
}

export interface CreateCreditDto {
    name: string;
    limit: number;
}

export interface UpdateCreditDto extends Partial<CreateCreditDto> {}
