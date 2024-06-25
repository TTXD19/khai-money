import {TransactionContents} from "@/app/data/transactions/TransactionContents";
import {TransactionType} from "@/app/data/transactions/TransactionType";
import {firestore} from "@/app/lib/FirebaseConfig";
import {collection, getDocs, query} from "firebase/firestore";
import {User} from "@/app/data/user/UserDataModel";
import {doc, getDoc} from "@firebase/firestore";

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
        const userTransactionsRef = collection(firestore, `users/${userId}/transactions`);
        const transactionsSnapshot = await getDocs(query(userTransactionsRef))

        if (transactionsSnapshot === null || transactionsSnapshot.size === 0) {
            return "cant find transactions";
        }
        const transactionList: TransactionContents[] = []
        transactionsSnapshot.forEach((doc) => {
            const transactionData = doc.data()
            const transactionContent: TransactionContents = {
                id: doc.id,
                date: mapToDateFormat(transactionData.createdAt),
                amount: transactionData.amount,
                itemCategory: transactionData.itemCategory,
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

function mapToDateFormat(timestamp: string): string {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');

    // return `${year}/${month}/${day}`
    return "2022/06/23"
}