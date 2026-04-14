import Image from "next/image";
import Link from "next/link";
import Title from "./components/title";
import Projeto from "./components/project";
import Picture from "./components/profilepicture";

export default function Home() {
  return (
    <div className="text-maneiro flex flex-col p-9 items-center h-full w-full selection:bg-amber-900 selection:text-amber-50">
      <div className="flex flex-col md:w-2xl w-full h-full">
        <header className="flex flex-row w-full h-full">
          <Picture></Picture>
          <div className="flex px-3 flex-col w-full justify-start ">
            <div className="flex-1">
              <Title></Title>
            </div>
            <div className="flex-2">
              <p className="">software engineer</p>
            </div>
            <div className="flex-9">
              <p className="text-zinc-600 text-menor">and other things...</p>
            </div>
          </div>

          <nav className="flex flex-col justify-center ">
            <div className="flex justify-end">
              <Link href="mdx" className="">
                articles
              </Link>
            </div>
            <div className="flex justify-end ">
              <Link href="https://github.com/pontojasko" className="">
                github
              </Link>
            </div>
            <div className="flex justify-end">
              <Link href="mdx" className="">
                talk
              </Link>
            </div>
          </nav>
        </header>

        <p className="p-2 py-5 ">
          <b>Whats up?</b> I'm <u>Heitor Jasko!</u>
          <br />
          <br /> I'm a generalist software engineer and an analysis and systems
          development student at <u>IFSP</u>.
        </p>
        <hr className="h-0.5"></hr>
        <h2 className="text-2xl tracking-tighter my-3  text-amber-950 ">
          projects
        </h2>

        <Projeto
          titulo="benius"
          descricao={`an anonymous mini-social-network-twitter-like experience.

          every f5 or simple-tap on the post-it, the message swaps to a random one.
          double-clicking it enables you to send your own message.

          stack:
          * selfhosted java backend and postgresql database
          * nextjs react retro frontend`}
          foto="/beniius.png"
          link="https://benius.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="tasty"
          descricao={`a web-based playground-terminal simulator built with java. designed to handle commands as independent execution units, mimicking the behavior of a native bash environment.

users can sign up and log in;
call a random message from benius;
and chat with an simple AI.

stack:
* selfhosted java backend and postgresql database
* nextjs react minimal frontend
* groq AI powered by a low-level java httprequest implementation.

`}
          foto="/tty.png"
          link="https://tasty.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="yakihami"
          descricao={`a point-of-sale and digital menu system built for a local food shop.

          customers can place orders with dynamic delivery fees based on distance;
          admins can manage the incoming orders queue, view history, and print receipts.

          stack:
          * nextjs fullstack (nodejs backend)
          * postgresql database`}
          foto="/yakihami.png"
          link="https://yakihami.jasko.dev/"
        ></Projeto>
      </div>
    </div>
  );
}
