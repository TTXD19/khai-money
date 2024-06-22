import {TransactionType} from "@/app/data/transactions/TransactionType";

export interface TransactionContents {
    id: string
    date: string;
    type: string;
    amount: string,
    itemCategory: string,
    desc: string
}