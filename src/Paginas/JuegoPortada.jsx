import React from "react";

const JuegoPortada = () => {
  return (
    <div className="flex relative justify-self-center items-center h-[70vh] w-[85vw] rounded-2xl gap-3 border-verde-intermedio border-1 px-4 py-12 my-10 justify-around overflow-visible">
      <div className="flex overflow-visible -mr-7 items-center justify-center ">
        <a href="/datacartas">
          <img src="/img/cartasPortada.svg" alt="cartas img" />
        </a>
        <a href="/juego">
          <img src="/img/juegoPortada.svg" alt="cartas img" />
        </a>
      </div>
    </div>
  );
};

export default JuegoPortada;
