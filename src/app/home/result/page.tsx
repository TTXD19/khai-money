'use client';
import ItemHeader from "@/app/component/result/item_header";
import ItemContent from "@/app/component/result/item_content";
import {fetchUserTransactions} from "@/app/data/result/Result";
import {useEffect, useState} from "react";
import {TransactionContents} from "@/app/data/transactions/TransactionContents";

export default function Page() {

    const [transactions, setTransactions] = useState<TransactionContents[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchUserTransactions("Ar83KFCgL0dI4xlsff7W")
                if (typeof result === 'string') {
                    setError(result)
                } else {
                    setTransactions(result)
                }
            } catch (error) {
                setError('Error fetching data');
            }
        };

        fetchData().then(r =>
            console.log("Transactions has called")
        )
    }, []);

    return (
        <div className="flex justify-center mt-12">
            <div className="flex w-9/12 flex-col">
                <div className="mt-0">
                    <span className="text-black text-4xl font-black">今日已花費：2000 元</span>
                </div>
                <div className="flex flex-col">
                    <div className="mt-14">
                        <div className="flex flex-grow justify-between">
                            <ItemHeader title="日期"/>
                            <ItemHeader title="型態"/>
                            <ItemHeader title="金額"/>
                            <ItemHeader title="類別"/>
                            <ItemHeader title="內容"/>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col gap-y-5">
                            {error ? (
                                <div className="text-red-500">Error: {error}</div>
                            ) : (
                                <div className="flex flex-col gap-y-5">
                                    {transactions.map((spending) => (
                                        <ItemContent key={spending.id}{...spending} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <input className="flex flex-grow border border-gray-300 rounded-md ps-1.5 py-1.5" type="text"
                               placeholder="你可以試試：我今天買了買當勞歡樂套餐總共120元"/>
                        <button className="ps-3.5 pe-3.5 pt-2.5 pb-2.5 ms-5 bg-black text-white rounded-md">新增
                        </button>
                    </div>
                </div>
                <div className="flex mt-32">
                    <span className="w-max text-black text-4xl font-black">您的消費分析</span>
                </div>
                <div className="flex mt-6">
                    <span
                        className="text-black text-2xl font-black text-center">這份消費分析報告揭示了我們最新的市場趨勢和消費者行為。在過去的季度中，我們觀察到消費者對於健康和健身產品的需求持續增長。特別是在健康意識提高和生活方式改變的影響下，有機食品和天然成分的產品銷售顯著增加。
                        此外，我們發現了線上購物的增長趨勢。由於數字化科技的普及，消費者更傾向於在線上平台上購物，這在特定產品類別中尤其明顯，例如家庭用品和日常必需品。
                    </span>
                </div>
            </div>
        </div>
    )
}