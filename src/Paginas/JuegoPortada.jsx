import React from "react";

const JuegoPortada = () => {
  return (
    <div className="flex mx-auto mt-20 w-[90%] h-[80%]  bg-neutral-500/0 rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] border border-neutral-500">
      <div className="w-[40%] h-[50%] m-auto">
        <div className=" h-[90%] mb-5 bg-[#EDE8DF] rounded-tl-xl rounded-bl-xl shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)] ">
          <img src="/img/imgCartasPortada.svg" alt="Img" />
        </div>
        <h2 className=" font-family-titulo text-[20px] text-[#36463E]">
          {" "}
          CARTAS{" "}
        </h2>
      </div>
      <div className="w-[40%] h-[50%] m-auto">
        <div className="h-[90%] mb-5 bg-[#EDE8DF] rounded-tr-xl rounded-br-xl shadow-[2px_4px_4px_4px_rgba(0,0,0,0.25)] ">
          <img className=" " src="/img/imgJuegoPortada.svg" alt="Img" />
        </div>
        <h2 className=" font-family-titulo text-[20px] text-[#36463E]">
          {" "}
          JUEGO{" "}
        </h2>
      </div>
    </div>
  );
};

export default JuegoPortada;
