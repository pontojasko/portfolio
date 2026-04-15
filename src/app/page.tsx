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
              <Link href="articles" className="hover:text-amber-900">
                articles
              </Link>
            </div>
            <div className="flex justify-end ">
              <Link
                href="https://github.com/pontojasko"
                className="hover:text-amber-900"
              >
                github
              </Link>
            </div>
            <div className="flex justify-end">
              <Link href="talk" className="hover:text-amber-900">
                talk
              </Link>
            </div>
          </nav>
        </header>

        <p className="p-2 py-5 ">
          whats up? my name is Heitor Jasko.
          <br />
          i'm a software engineer and an analysis and systems development
          student at <u>IFSP</u>.
          <br /> <br />
          passionate about building asynchronous and decoupled backends using
          clean code standards, and always engineering resilient java
          microservices on{" "}
          <Link className="hover:text-amber-900" href="articles/2">
            <u> my personal server</u>
          </Link>
          .
        </p>
        <hr className="h-0.5"></hr>
        <h2 className="text-2xl tracking-tighter my-3  text-amber-950 ">
          projects
        </h2>

        <Projeto
          titulo="benius"
          descricao={`overview:
an anonymous mini-social-network-twitter-like experience.

every f5 or simple-tap on the post-it, the message swaps to a random one. double-clicking it enables you to send your own message.
built with clean code standards and a clear separation of concerns to ensure a highly scalable and decoupled backend.

technologies:
* backend: java, with postgresql database
* frontend: nextjs, react`}
          foto="/beniius.png"
          link="https://benius.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="tasty"
          descricao={`overview:
a web-based playground-terminal simulator.

designed to handle commands as independent execution units following SOLID principles.
users can safely authenticate, call a message from Benius API, and chat with an AI asynchronously.

technologies:
* backend: java with postgresql database
* frontend: nextjs, react
* external apis: groq API low-level implementation`}
          foto="/tty.png"
          link="https://tasty.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="yakihami"
          descricao={`overview:
a point-of-sale and digital menu system built for a local food shop.

customers place orders with dynamic delivery fees computed on the fly.
admins manage the incoming event-driven orders queue, view history, and print receipts.
optimized for low latency and high availability.

technologies:
* backend: event-driven node.js architecture via nextjs serverless functions, integrated with postgresql database
* frontend: nextjs, react`}
          foto="/yakihami.png"
          link="https://yakihami.jasko.dev/"
        ></Projeto>
      </div>
    </div>
  );
}
