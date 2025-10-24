import SelectorDeDificultad from "../Componentes/SelectorDeDificultad";
import JuegoC from "../Componentes/Juego";
import JuegoFinalC from "../Componentes/JuegoFinalC";
import { useState } from "react";

const Juego = () => {
  const mobile = window.innerWidth < 640;
  const [etapa, setEtapa] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-between min-h-[calc(100vh-80px)] sm:min-h-0 items-center">
        <div className="flex flex-col mx-auto sm:w-1/2 w-full justify-center sm:justify-start">
          {(!mobile || etapa === 0) && (
            <div className="flex items-center justify-center">
              <SelectorDeDificultad setEtapa={setEtapa} />
            </div>
          )}
          {(!mobile || etapa === 1) && (
            <div className="flex sm:flex-2 justify-center items-center">
              <JuegoC setEtapa={setEtapa} />
            </div>
          )}
        </div>
        {(!mobile || etapa === 2) && (
          <div className="flex sm:flex-2 sm:w-1/2 justify-center sm:mt-20 items-center">
            <JuegoFinalC etapa={etapa} />
          </div>
        )}
      </div>
    </>
  );
};

export default Juego;
