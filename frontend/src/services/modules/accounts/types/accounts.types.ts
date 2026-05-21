export interface Account {
    id: number;
    name: string;
    balance: number;
}

export interface CreateAccountDto {
    name: string;
    balance: number;
}

export interface UpdateAccountDto extends Partial<CreateAccountDto> {}
