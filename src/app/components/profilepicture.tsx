"use client";

import Image from "next/image";
import { useState } from "react";

export default function Picture() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
    >
      <Image
        width={90}
        height={90}
        className="rounded-sm object-cover justify-items-center -webkit-touch-callout: none;"
        src={hover ? "/dancing.gif" : "/picture.png"}
        alt="foto"
        draggable="false"
        title="this is my father in 60s."
      ></Image>
    </div>
  );
}
