import React from "react";

const Cartilla = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full overflow-hidden mb-8">
      <h2 className="font-family-titulo text-[20px] sm:text-[30px] text-[#36463E]">
        FORMACION DE ACROYOGA
      </h2>
      <div className="bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-auto w-[85vw] max-w-4xl mt-4 mb-8 p-8 text-[12px] sm:text-[18px] md:text-[20px] text-[#36463E] relative">
        <p>
          Somos Tania y Dani, y nos apasiona compartir el mundo del acroyoga.
          Creamos una formación 100% presencial para profes, pensada para
          acompañarte desde lo más esencial hasta lo más avanzado. Empezamos por
          las bases y los fundamentos, puliendo cada detalle, y vamos creciendo
          paso a paso hasta llegar a una práctica sólida y avanzada. Además,
          profundizamos en el conocimiento del cuerpo, la biomecánica y las
          herramientas necesarias para enseñar con claridad y seguridad.
        </p>
        <br />
        <p>
          También armamos una cartilla con todos los contenidos de la formación,
          que podés comprar de manera independiente aunque no participes del
          curso. Es importante aclarar que la cartilla no certifica como profe,
          pero sí te brinda todo el material y el recorrido teórico de la
          formación.
        </p>
        <br />
        <p>
          Escribinos para mas informacion sobre la formacion o comprar tu
          cartilla.
        </p>
        <a
          href="https://wa.me/5493874153109?text=Hola%20Tania!%20quer%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20formaci%C3%B3n%20de%20acroyoga%20y%20la%20cartilla"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 ml-auto w-fit"
        >
          <img
            className="w-6 h-6 sm:w-10 sm:h-10"
            src="/img/flechaChica.svg"
            alt="flecha"
          />
        </a>
        <div className="flex justify-start mt-4 -ml-12 -mb-20 sm:-ml-8">
          <img
            className="max-w-[90%] h-auto"
            src="/img/imgCartilla.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Cartilla;
