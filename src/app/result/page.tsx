import ItemHeader from "@/app/ui/result/item_header";
import ItemContent from "@/app/ui/result/item_content";
import {TransactionType} from "@/app/data/TransactionType";
import {ItemContentProps} from "@/app/data/ItemContentProps";
import Link from "next/link";


export default function Page() {

    const item: ItemContentProps = {
        date: new Date(),
        type: TransactionType.Expense,
        amount: "1000",
        itemCategory: "晚餐",
        desc: "我的晚餐"
    };

    const item_2: ItemContentProps = {
        date: new Date(),
        type: TransactionType.Expense,
        amount: "1000",
        itemCategory: "晚餐",
        desc: "因為 TypeScript 會從 0 開始"
    };

    return (
        <div>
            <h1 className="text-black mt-14 text-4xl">今日已花費：2000 元</h1>
            <div className="flex justify-center">
                <div className="w-1/2 flex flex-col">
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
                            <ItemContent {...item} />
                            <ItemContent {...item} />
                            <ItemContent {...item_2} />
                            <ItemContent {...item} />
                            <ItemContent {...item} />
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <input className="flex flex-grow border border-gray-300 rounded-md ps-1.5 py-1.5" type="text"
                               placeholder="你可以試試：我今天買了買當勞歡樂套餐總共120元"/>
                        <button className="ps-3.5 pe-3.5 pt-2.5 pb-2.5 ms-5 bg-black text-white rounded-md">新增
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}