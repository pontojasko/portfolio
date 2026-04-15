import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col p-9 items-center h-full justify-center w-full h-svh selection:bg-amber-900 selection:text-amber-50">
      <div className="text-center p-20 rounded-4xl">
        <h1 className="text-5xl select-none mb-3">talk to me!</h1>
        <h1 className="text-2xl mb-5">heitor@jasko.dev</h1>
        <Link className="select-none hover:text-red-800 " href="/">
          ok
        </Link>
      </div>
    </div>
  );
}
