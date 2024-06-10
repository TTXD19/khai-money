import SingleItemStyle from "@/component/result/items/SingleItemStyle";
import DateUtils from "@/app/tools/DateUtils";
import {ItemContentProps} from "@/data/ItemContentProps";

export default function ItemContent({date, type, amount, itemCategory, desc}: ItemContentProps) {
    return (
        <div className="flex justify-between gap-9">
            <SingleItemStyle text={DateUtils.formatDate(date)}/>
            <SingleItemStyle text={type}/>
            <SingleItemStyle text={amount}/>
            <SingleItemStyle text={itemCategory}/>
            <SingleItemStyle text={desc}/>
        </div>
    );
}