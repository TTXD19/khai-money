import ItemHeader from "@/app/ui/result/item_header";
import ItemContent from "@/app/ui/result/item_content";
import {TransactionType} from "@/app/data/TransactionType";
import {ItemContentProps} from "@/app/data/ItemContentProps";


export default function Page() {

    const item: ItemContentProps = {
        date: new Date(),
        type: TransactionType.Expense,
        amount: "1000",
        itemCategory: "晚餐",
        desc: "我的晚餐"
    };

    return (
        <div>
            <h1 className="text-black text-center mt-14 text-4xl">今日已花費：2000 元</h1>
            <div className="flex justify-center mt-14 gap-9">
                <ItemHeader title="日期"/>
                <ItemHeader title="型態"/>
                <ItemHeader title="金額"/>
                <ItemHeader title="類別"/>
                <ItemHeader title="內容"/>
            </div>
            <div className="flex justify-center mt-14">
                <ItemContent {...item} />
            </div>
        </div>

    )
}