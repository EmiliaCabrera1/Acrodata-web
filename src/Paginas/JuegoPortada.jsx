import React from "react";

const JuegoPortada = () => {
  return (
    <div className="flex relative justify-self-center items-center justify-around h-[80%] w-[80%] rounded-2xl gap-3 border-verde-intermedio border-1 px-4 py-12 my-10 space-around oveerflow-visible">
      <div className="flex overflow-visible w-[120%] -mr-7 ">
        <a href="/datacartas">
          <img src="/img/cartasPortada.svg" alt="cartas img" />
        </a>
        <a href="/juegonuevo">
          <img src="/img/juegoPortada.svg" alt="cartas img" />
        </a>
      </div>
    </div>
  );
};

export default JuegoPortada;
