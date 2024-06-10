export default function ItemHeader({title}: {
    title: string;
}) {
    return <div className="w-40 h-14 flex justify-center items-center bg-gray-300 rounded-md">
        <text className="text-center font-bold text-2xl">{title}</text>
    </div>
}