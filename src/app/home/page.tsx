import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <span className="text-black text-3xl">開始你的花費計畫吧</span>
            <input className="bg-amber-50 w-2/3 ps-1.5 py-1.5 my-3" type="text"
                   placeholder="你可以試試：我今天買了買當勞歡樂套餐總共120元"/>
            <Link href="/result">
                <button className="flex">新增</button>
            </Link>
        </div>
    );
}