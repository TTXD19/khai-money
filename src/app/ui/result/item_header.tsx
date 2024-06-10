export default function ItemHeader({title}: {
    title: string;
}) {
    return <div>
        <text className="ps-16 pe-16 pt-2.5 pb-2.5 font-bold text-2xl rounded-md bg-gray-300">{title}</text>
    </div>
}