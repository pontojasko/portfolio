import Image from "next/image";
import Link from "next/link";
import Title from "./components/title";
import Projeto from "./components/project";
import Picture from "./components/profilepicture";

export default function Home() {
  return (
    <div
      title="ucranian surname lmao"
      className="text-maneiro flex flex-col p-9 items-center h-full w-full selection:bg-amber-900 selection:text-amber-50"
    >
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
          <br />
          <br />
          In 2025, I founded the PUCPR Hacking Club, a programming club at my
          university with 40+ devs. Currently, I conduct research on deep
          learning models for network intrusion detection.
          <br />
          <br />I was nominated for the Dean's List of the PUCPR Polytechnic
          School in recognition of my academic performance, being the only
          student selected from the Computer Science undergraduate program.
        </p>
        <h2 className="text-2xl tracking-tighter my-3 ">projetos</h2>

        <Projeto
          titulo="benius"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          sapien mauris. Ut pharetra facilisis elit non tempus. Nulla nulla"
          foto="/beniius.png"
          link="https://benius.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="tasty"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          sapien mauris. Ut pharetra facilisis elit non tempus. Nulla nulla"
          foto="/tty.png"
          link="https://tasty.jasko.dev/"
        ></Projeto>
        <Projeto
          titulo="yakihami"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          sapien mauris. Ut pharetra facilisis elit non tempus. Nulla nulla"
          foto="/yakihami.png"
          link="https://yakihami.jasko.dev/"
        ></Projeto>
      </div>
    </div>
  );
}
