import Link from "next/link";
import Picture from "../components/profilepicture";
import Title from "../components/title";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-maneiro flex flex-col p-9 items-center min-h-screen w-full selection:bg-amber-900 selection:text-amber-50">
      <div className="flex flex-col md:w-2xl w-full h-full">
        <header className="flex flex-row">
          <div className="flex flex-col w-full">
            <Link
              href="/"
              className="text-zinc-500 hover:text-amber-900  text-end text-sm my-2 mr-9"
            >
              ← home
            </Link>
            {/*<h1 className="text-xl font-medium tracking-tighter">articles</h1>*/}
          </div>
        </header>

        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
