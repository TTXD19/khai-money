export default function SingleItemStyle({text}: { text: string }) {
    return <div className="w-40 max-h-14 flex items-center justify-center">
        <span className="text-black text-center text-xl font-semibold">{text}</span>
    </div>
}