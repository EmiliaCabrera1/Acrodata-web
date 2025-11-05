import { div } from "framer-motion/client";
import React from "react";

const JuegoPortada = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex relative mx-auto items-center h-[80%] w-[85vw] rounded-2xl gap-3 border-verde-intermedio border-1 px-4 py-12 justify-around overflow-visible">
        <div className="flex overflow-visible -mr-7 items-center justify-center ">
          <a
            href="/datacartas"
            className="max-w-[calc(50vh/359*160)] object-contain"
          >
            <img src="/img/cartasPortada.svg" alt="cartas img" loading="lazy" />
          </a>
          <a
            href="/juego"
            className="max-w-[calc(50vh/359*193)] object-contain"
          >
            <img src="/img/juegoPortada.svg" alt="cartas img" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JuegoPortada;
