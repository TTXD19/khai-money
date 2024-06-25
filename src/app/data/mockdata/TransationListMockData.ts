import {TransactionContents} from "@/app/data/transactions/TransactionContents";
import {TransactionType} from "@/app/data/transactions/TransactionType";

export function fetchSpendingList(): TransactionContents[] {
    return [
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '120',
            itemCategory: '餐飲',
            desc: '在麥當勞吃午餐'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Income,
            amount: '5000',
            itemCategory: '薪水',
            desc: '月薪'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Transfer,
            amount: '300',
            itemCategory: '儲蓄',
            desc: '轉帳到儲蓄帳戶'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '50',
            itemCategory: '交通',
            desc: '公車票'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '200',
            itemCategory: '娛樂',
            desc: '看電影'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Income,
            amount: '1500',
            itemCategory: '自由職業',
            desc: '自由職業項目付款'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '300',
            itemCategory: '健康',
            desc: '健身房會員費'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '600',
            itemCategory: '購物',
            desc: '新鞋'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Transfer,
            amount: '1000',
            itemCategory: '投資',
            desc: '股票投資'
        },
        {
            id: "",
            date: "",
            type: TransactionType.Expense,
            amount: '80',
            itemCategory: '餐飲',
            desc: '在餐廳吃晚餐'
        }
    ]
}