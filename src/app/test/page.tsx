'use client';
import ItemContent from "@/app/component/result/item_content";
import {fetchFirebaseStoreData} from "@/app/data/result/Result";
import {useEffect, useState} from "react";
import {User} from "@/app/data/user/UserDataModel";


export default function Page() {

    const defaultUser: User = {
        name: "Test",
    };
    const [user, setUsers] = useState<User>(defaultUser);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFirebaseStoreData();
                console.error('Error fetching data:', data);
                setUsers(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r =>
            console.log("Data has called")
        );
    }, []);


    return (
        <div className="flex mt-14 items-center">
            <p>{user.name}</p>
        </div>
    )
}