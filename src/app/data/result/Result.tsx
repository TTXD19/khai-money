import {ItemContentProps} from "@/app/data/ItemContentProps";
import {TransactionType} from "@/app/data/TransactionType";
import {firestore} from "@/app/lib/FirebaseConfig";
import {collection, getDocs} from "firebase/firestore/lite";
import {User} from "@/app/data/user/UserDataModel";

export function fetchSpendingList(): ItemContentProps[] {
    return [
        {
            date: new Date(2023, 5, 15),
            type: TransactionType.Expense,
            amount: '120',
            itemCategory: '餐飲',
            desc: '在麥當勞吃午餐'
        },
        {
            date: new Date(2023, 5, 16),
            type: TransactionType.Income,
            amount: '5000',
            itemCategory: '薪水',
            desc: '月薪'
        },
        {
            date: new Date(2023, 5, 17),
            type: TransactionType.Transfer,
            amount: '300',
            itemCategory: '儲蓄',
            desc: '轉帳到儲蓄帳戶'
        },
        {
            date: new Date(2023, 5, 18),
            type: TransactionType.Expense,
            amount: '50',
            itemCategory: '交通',
            desc: '公車票'
        },
        {
            date: new Date(2023, 5, 19),
            type: TransactionType.Expense,
            amount: '200',
            itemCategory: '娛樂',
            desc: '看電影'
        },
        {
            date: new Date(2023, 5, 20),
            type: TransactionType.Income,
            amount: '1500',
            itemCategory: '自由職業',
            desc: '自由職業項目付款'
        },
        {
            date: new Date(2023, 5, 21),
            type: TransactionType.Expense,
            amount: '300',
            itemCategory: '健康',
            desc: '健身房會員費'
        },
        {
            date: new Date(2023, 5, 22),
            type: TransactionType.Expense,
            amount: '600',
            itemCategory: '購物',
            desc: '新鞋'
        },
        {
            date: new Date(2023, 5, 23),
            type: TransactionType.Transfer,
            amount: '1000',
            itemCategory: '投資',
            desc: '股票投資'
        },
        {
            date: new Date(2023, 5, 24),
            type: TransactionType.Expense,
            amount: '80',
            itemCategory: '餐飲',
            desc: '在餐廳吃晚餐'
        }
    ]
}

export async function fetchFirebaseStoreData(): Promise<User[]> {
    const usersCollection = collection(firestore, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    const users: User[] = []

    usersSnapshot.forEach((doc) => {
        const userData = doc.data()
        console.log("native Data")
        console.log(userData)
        const user: User = {
            name: userData.name,
        };
        console.log("user data")
        console.log(user)
        users.push(user)
    })

    return users
}