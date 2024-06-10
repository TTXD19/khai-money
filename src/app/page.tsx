import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="flex justify-center text-black text-3xl">開始你的花費計畫吧</h1>
        <input className="flex bg-amber-50 w-2/3 ps-1.5 py-1.5 my-3" type="text" placeholder="你可以試試：我今天買了買當勞歡樂套餐總共120元"/>
        <Link href="/result">
          <button className="flex">新增</button>
        </Link>
      </main>
  );
}
