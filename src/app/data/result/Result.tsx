import {TransactionContents} from "@/app/data/transactions/TransactionContents";
import {TransactionType} from "@/app/data/transactions/TransactionType";
import {firestore} from "@/app/lib/FirebaseConfig";
import {collection, getDocs, query} from "firebase/firestore";
import {User} from "@/app/data/user/UserDataModel";
import {addDoc, doc, getDoc} from "@firebase/firestore";

// export function fetchSpendingList(): TransactionContents[] {
//     return [
//         {
//             date: new Date(2023, 5, 15),
//             type: TransactionType.Expense,
//             amount: '120',
//             itemCategory: '餐飲',
//             desc: '在麥當勞吃午餐'
//         },
//         {
//             date: new Date(2023, 5, 16),
//             type: TransactionType.Income,
//             amount: '5000',
//             itemCategory: '薪水',
//             desc: '月薪'
//         },
//         {
//             date: new Date(2023, 5, 17),
//             type: TransactionType.Transfer,
//             amount: '300',
//             itemCategory: '儲蓄',
//             desc: '轉帳到儲蓄帳戶'
//         },
//         {
//             date: new Date(2023, 5, 18),
//             type: TransactionType.Expense,
//             amount: '50',
//             itemCategory: '交通',
//             desc: '公車票'
//         },
//         {
//             date: new Date(2023, 5, 19),
//             type: TransactionType.Expense,
//             amount: '200',
//             itemCategory: '娛樂',
//             desc: '看電影'
//         },
//         {
//             date: new Date(2023, 5, 20),
//             type: TransactionType.Income,
//             amount: '1500',
//             itemCategory: '自由職業',
//             desc: '自由職業項目付款'
//         },
//         {
//             date: new Date(2023, 5, 21),
//             type: TransactionType.Expense,
//             amount: '300',
//             itemCategory: '健康',
//             desc: '健身房會員費'
//         },
//         {
//             date: new Date(2023, 5, 22),
//             type: TransactionType.Expense,
//             amount: '600',
//             itemCategory: '購物',
//             desc: '新鞋'
//         },
//         {
//             date: new Date(2023, 5, 23),
//             type: TransactionType.Transfer,
//             amount: '1000',
//             itemCategory: '投資',
//             desc: '股票投資'
//         },
//         {
//             date: new Date(2023, 5, 24),
//             type: TransactionType.Expense,
//             amount: '80',
//             itemCategory: '餐飲',
//             desc: '在餐廳吃晚餐'
//         }
//     ]
// }

export async function fetchFirebaseStoreData(): Promise<User[]> {
    const usersCollection = collection(firestore, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    const users: User[] = []
    if (usersSnapshot.size === 0) {
        const user: User = {
            userName: "Empty",
        };
        users.push(user)
        return users
    }
    usersSnapshot.forEach((doc) => {
        const userData = doc.data()
        console.warn("native Data:", userData);
        const user: User = {
            userName: userData.userName,
        };
        console.warn("user data:", user);
        users.push(user)
    })


    return users;
}

export async function fetchUser(userId: string): Promise<User | string> {
    try {
        const userDocRef = doc(firestore, 'users', userId);
        const userDocSnap = await getDoc(userDocRef)
        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            if (userData && userData.userName) {
                return {
                    userName: userData.userName,
                };
            } else {
                console.warn("userName is missing in the user document:", "FaaSMLfza6zm98TG0Gig");
                return "cant find user";
            }
        } else {
            console.warn("No such document with userId:", "Ar83KFCgL0dI4xlsff7W");
            return "cant find user";
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return "cant find user";
    }
}

export async function fetchUserTransactions(userId: string): Promise<TransactionContents[] | string> {
    try {
        console.warn("start call");
        const userTransactionsRef = collection(firestore, `users/${userId}/transactions`);
        console.warn("middle call");
        const transactionsSnapshot = await getDocs(query(userTransactionsRef))
        console.warn("end call");

        if (transactionsSnapshot === null || transactionsSnapshot.size === 0) {
            return "cant find transactions";
        }
        const transactionList: TransactionContents[] = []
        transactionsSnapshot.forEach((doc) => {
            console.warn("has data");
            const transactionData = doc.data()
            console.warn("native Data:", transactionData);
            const transactionContent: TransactionContents = {
                id: doc.id,
                date: mapToDateFormat(transactionData.createdAt),
                amount: transactionData.amount,
                itemCategory: transactionData.category,
                desc: transactionData.description,
                type: transactionData.type,
            }
            transactionList.push(transactionContent)
        })
        return transactionList
    } catch (error) {
        console.error("Error fetching user:", error);
        return "cant find user";
    }
}

function mapFirestoreTypeToEnum(type: string): TransactionType | undefined {
    switch (type) {
        case "income":
            return TransactionType.Income;
        case "expense":
            return TransactionType.Expense;
        case "transfer":
            return TransactionType.Transfer;
        default:
            console.warn(`Unknown transaction type: ${type}`);
            return undefined; // Or handle the case for unknown types
    }
}

function mapToDateFormat(data: { seconds: number, nanoseconds: number }): string {
    const date = new Date(data.seconds * 1000 + data.nanoseconds / 1000000); // Convert Firestore timestamp to JS Date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}