import SelectorDeDificultad from "../Componentes/SelectorDeDificultad";
import JuegoC from "../Componentes/Juego";
import JuegoFinalC from "../Componentes/JuegoFinalC";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const Juego = () => {
  const mobile = window.innerWidth < 640;
  const [etapa, setEtapa] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-between sm:min-h-0 items-center">
        <div className="flex flex-col mx-auto sm:w-1/2 w-full justify-center sm:justify-start">
          <div
            className={twMerge(
              etapa === 0 ? "flex" : "hidden",
              "sm:flex items-center justify-center"
            )}
          >
            <SelectorDeDificultad setEtapa={setEtapa} />
          </div>
          <div
            className={twMerge(
              etapa === 1 ? "flex" : "hidden",
              "sm:flex sm:flex-2 justify-center items-center"
            )}
          >
            <JuegoC setEtapa={setEtapa} />
          </div>
        </div>
        <div
          className={twMerge(
            etapa === 2 ? "flex" : "hidden",
            "sm:flex sm:flex-2 sm:w-1/2 justify-center sm:mt-20 items-center"
          )}
        >
          <JuegoFinalC etapa={etapa} />
        </div>
      </div>
    </>
  );
};

export default Juego;
