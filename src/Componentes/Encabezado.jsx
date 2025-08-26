import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Encabezado = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <svg className="absolute w-0 h-0">
        <defs>
          <mask id="hole-mask" maskContentUnits="objectBoundingBox">
            <rect width="1" height="1" fill="white" />
            <rect
              x="0"
              y="0.5"
              width="0.10"
              height="0.5"
              rx="0.2"
              fill="black"
            />
            <rect
              x="0.05"
              y="0.5"
              width="0.90"
              height="0.5"
              rx="0"
              fill="black"
            />
            <rect
              x="0.5"
              y="0.5"
              width="0.5"
              height="0.5"
              rx="0"
              fill="black"
            />
            <rect
              x="0"
              y="0.75"
              width="0.25"
              height="0.25"
              rx="0"
              fill="black"
            />
          </mask>
        </defs>
      </svg>

      <nav className="flex h-20 w-full bg-transparent relative">
        <div
          className={twMerge(
            "rounded-br-2xl bg-verde-intermedio shadow-custom-shadow",
            expanded ? "w-[60%]" : "w-[70%]"
          )}
        />
        <div
          id="sidebar"
          className={twMerge(
            "bg-verde-intermedio h-full shadow-custom-shadow",
            expanded ? "w-[40%]" : "w-[30%]"
          )}
          style={{
            maskImage: "url(#hole-mask)",
            WebkitMaskImage: "url(#hole-mask)",
          }}
        ></div>
        {!expanded && (
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
        )}
        {expanded && (
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
        )}
      </nav>
    </>
  );
};

export default Encabezado;
