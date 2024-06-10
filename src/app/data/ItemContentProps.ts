import {TransactionType} from "@/app/data/TransactionType";

export interface ItemContentProps {
    date: Date;
    type: TransactionType;
    amount: string,
    itemCategory: string,
    desc: string
}