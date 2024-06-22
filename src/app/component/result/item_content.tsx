import SingleItemStyle from "@/app/component/result/items/SingleItemStyle";
import DateUtils from "@/app/tools/DateUtils";
import {TransactionContents} from "@/app/data/transactions/TransactionContents";

export default function ItemContent({date, type, amount, itemCategory, desc}: TransactionContents) {
    return (
        <div className="flex justify-between gap-9">
            <SingleItemStyle text={date}/>
            <SingleItemStyle text={type}/>
            <SingleItemStyle text={amount}/>
            <SingleItemStyle text={itemCategory}/>
            <SingleItemStyle text={desc}/>
        </div>
    );
}