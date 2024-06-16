import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-black font-bold text-9xl mt-28">記帳變
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">簡單</span>了
            </h1>
            <span className="text-2xl text-gray-400 mt-16 text-center">
                想記什麼直接輸入即可，跳過各種煩瑣的選擇<br/>
                簡單一點，記得更快樂<br/>
                Happy Budget Management
            </span>
            <span className="text-black text-5xl font-bold mt-24">開始你的花費計畫吧</span>
            <input className="bg-white w-2/3 ps-1.5 py-1.5 my-3 border mt-8" type="text"
                   placeholder="你可以試試：我今天買了買當勞歡樂套餐總共120元"/>
            <Link href="home/result">
                <button className="flex mt-6 bg-black text-white p-3 rounded-md">新增</button>
            </Link>
        </div>
    );
}