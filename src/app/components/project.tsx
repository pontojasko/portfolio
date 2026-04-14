"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface props {
  titulo: string;
  descricao: string;
  foto: string;
  link: string;
}

export default function Projeto(props: props) {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <a
        href={props.link}
        draggable="false"
        className="text-xl p-4 tracking-tighter  text-amber-950 hover:underline underline-offset-3 decoration-2 transition-all"
      >
        {props.titulo}
      </a>
      <div className="flex justify-center py-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-zinc-700 rounded-sm"
          href={props.link}
          draggable="false"
        >
          <Image
            width={600}
            height={200}
            className="rounded-sm group-hover:opacity-80"
            src={props.foto}
            alt="foto"
            draggable="false"
          ></Image>
          <p className="absolute   text-amber-50 text-shadow-sm/50 opacity-0 group-hover:opacity-100 inset-0 flex items-center justify-center">
            tap to see
          </p>
        </a>
      </div>

      <p className="px-5 py-1 sm:px-9 whitespace-pre-line">{props.descricao}</p>
      <hr className="h-0.5 my-5"></hr>
    </div>
  );
}
