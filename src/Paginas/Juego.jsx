import SelectorDeDificultad from "../Componentes/SelectorDeDificultad";
import JuegoC from "../Componentes/Juego";
import JuegoFinalC from "../Componentes/JuegoFinalC";
import { useState } from "react";

const Juego = () => {
  const mobile = window.innerWidth < 640;
  const [etapa, setEtapa] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mx-auto sm:w-1/2">
          {(!mobile || etapa === 0) && (
            <div className="h-full">
              <SelectorDeDificultad setEtapa={setEtapa} />
            </div>
          )}
          {(!mobile || etapa === 1) && (
            <div className="flex sm:flex-2 justify-center mb-8">
              <JuegoC setEtapa={setEtapa} />
            </div>
          )}
        </div>
        {(!mobile || etapa === 2) && (
          <div className="flex sm:flex-2 sm:w-1/2 justify-center sm:mt-20">
            <JuegoFinalC etapa={etapa} />
          </div>
        )}
      </div>
    </>
  );
};

export default Juego;
