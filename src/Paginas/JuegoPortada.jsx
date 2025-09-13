import React from "react";

const JuegoPortada = () => {
  return (
    <div className="flex justify-self-center h-[80%] w-[80%] rounded-2xl border-verde-intermedio border-1 px-2 py-12 my-10 space-around">
      <div className="flex flex-col items-center w-1/2 h-full">
        <a
          href="/datacartas"
          className="py-5 flex flex-col justify-end w-[90%] h-[70%] bg-stone-200 rounded-l-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer"
        >
          <img
            className="w-auto h-full"
            src="/img/imagenCartas.svg"
            alt="cartas"
          />
        </a>
        <a
          className="font-family-titulo text-2xl text-verde-oscuro my-10 cursor-pointer"
          href="/datacartas"
        >
          Cartas
        </a>
      </div>
      <div className="flex flex-col items-center w-1/2 h-full">
        <a
          href="/juego"
          className="py-5 flex flex-col justify-end w-[90%] h-[70%] bg-stone-200 rounded-r-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer overflow-visible"
        >
          <img
            className="w-auto h-[150%] mt-[50%]"
            src="/img/imagenJuego.svg"
            alt="juego"
          />
        </a>
        <a
          className="font-family-titulo text-2xl text-verde-oscuro my-10 cursor-pointer"
          href="/juego"
        >
          Juego
        </a>
      </div>
    </div>
  );
};

export default JuegoPortada;
