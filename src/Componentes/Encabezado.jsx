import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Encabezado = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav className="flex h-[69px] w-full bg-transparent relative">
        {!expanded && (
          <div className="bg-no-repeat bg-[url(/img/navCerrada.svg)] w-full h-full bg-cover sm:hidden">
            <button
              className={twMerge(
                "bg-verde-intermedio shadow-custom-shadow text-white ml-[2.5%] mt-2 h-[45%] w-full rounded-2xl absolute bottom-0 right-[2.5%]",
                expanded ? "w-[35%]" : "w-[25%]"
              )}
              onClick={() => setExpanded(!expanded)}
            >
              <img
                className="w-[80%] mx-2"
                src="/img/menuHamburguesa.svg"
                alt="menu hamburguesa"
              />
            </button>
          </div>
        )}
        {expanded && (
          <div className="bg-no-repeat bg-[url(/img/navAbierta.svg)] w-full h-full bg-cover sm:hidden">
            <ul className="bg-verde-intermedio shadow-custom-shadow text-white ml-[2.5%] w-[35%] rounded-2xl absolute top-12 right-[2.5%] pl-3 py-3">
              <li className="border-b-1 pl-4">Inicio</li>
              <li>Cartas/Juego</li>
              <li>Clases</li>
              <li>Contacto</li>
              <li>
                <button
                  className="absolute top-1 right-2"
                  onClick={() => setExpanded(!expanded)}
                >
                  x
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Encabezado;
