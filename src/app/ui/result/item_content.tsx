import SingleItemStyle from "@/app/ui/result/items/SingleItemStyle";
import DateUtils from "@/app/tools/DateUtils";
import {ItemContentProps} from "@/app/data/ItemContentProps";

export default function ItemContent({date, type, amount, itemCategory, desc}: ItemContentProps) {
    return (
        <div className="flex">
            <SingleItemStyle text={DateUtils.formatDate(date)}/>
            <SingleItemStyle text={type}/>
            <SingleItemStyle text={amount}/>
            <SingleItemStyle text={itemCategory}/>
            <SingleItemStyle text={desc}/>
        </div>
    );
}