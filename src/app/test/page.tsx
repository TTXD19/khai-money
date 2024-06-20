'use client';
import ItemContent from "@/app/component/result/item_content";
import {fetchFirebaseStoreData, fetchUser, writeData} from "@/app/data/result/Result";
import {useEffect, useState} from "react";
import {User} from "@/app/data/user/UserDataModel";


export default function Page() {

    const defaultUser: User = {
        userName: "Test",
    };
    const [user, setUsers] = useState<User>(defaultUser);
    const [error, setError] = useState<string | null>(null);
    const [userDetail, setUserDetail] = useState<User>(defaultUser);
    //
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFirebaseStoreData();
                console.error('Success fetching data:', data);
                setUsers(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r =>
            console.log("Data has called")
        );
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUser("FaaSMLfza6zm98TG0Gig");
                console.log('Success fetching data:');
                if (typeof userData === 'string') {
                    setError(userData);
                } else {
                    setUserDetail(userData);
                }
            } catch (error) {
                setError("Error fetching user data");
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r =>
            console.log("Data has called")
        );
    }, []);

    return (
        <div className="flex flex-col mt-14 items-center">
            <p>{user.userName}</p>
            {userDetail ? (
                <p>User Name: {userDetail.userName}</p>
            ) : (
                <p>{error || 'Loading...'}</p>
            )}
        </div>
    )
}