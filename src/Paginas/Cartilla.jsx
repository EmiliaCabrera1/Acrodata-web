import React from "react";

const Cartilla = () => {
  return (
    <div className="flex flex-col relative justify-self-center items-center justify-around oveerflow-hidden w-[100dvw]">
      <h2 className="absolute font-family-titulo text-[20px] sm:text-[30px] text-[#36463E] top-10">
        {" "}
        FORMACION DE ACROYOGA
      </h2>
      <img
        className="ml-15 min-w-[120dvw] sm:hidden "
        src="/img/cartillaCel.svg"
        alt="cartilla info"
      />
      <div className="w-full h-full overflow-hidden hidden sm:flex -mt-25">
        <img
          className="  ml-15 min-w-[120dvw] sm:min-w-[100dvw] sm:ml-90 "
          src="/img/cartillaPC.svg"
          alt="cartilla info"
        />
      </div>
      <a
        href="https://wa.me/5493874153109?text=Hola%20Tania!%20Estuve%20en%20tu%20p%C3%A1gina%20y%20me%20interesar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tu%20formacion%20y%20cartilla."
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-100 right-35 sm:right-120 sm:top-130"
      >
        <img
          src="/img/flechaChica.svg"
          alt="Lflecha"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </a>
    </div>
  );
};

export default Cartilla;
