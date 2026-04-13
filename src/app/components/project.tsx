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
        className="text-xl p-4 tracking-tighter"
      >
        {props.titulo}
      </a>
      <div className="flex justify-center py-3">
        <a href={props.link} draggable="false">
          <Image
            width={600}
            height={200}
            className=" rounded-sm"
            src={props.foto}
            alt="foto"
            draggable="false"
          ></Image>
        </a>
      </div>

      <p className="px-12 py-1 pb-10">{props.descricao}</p>
    </div>
  );
}
