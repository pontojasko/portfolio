"use client";

import { useState } from "react";

export default function Title() {
  const [hover, setHover] = useState(false);

  return (
    <h1
      className="text-2xl font-bold w-fit text-amber-900 tracking-widest font-stretch-extra-expanded cursor-default select-none "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? "jasko" : "ясько"}
    </h1>
  );
}
