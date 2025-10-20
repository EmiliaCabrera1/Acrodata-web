import SelectorDeDificultad from "../Componentes/SelectorDeDificultad";
import useJuego from "../Hooks/useJuego";
import JuegoC from "../Componentes/Juego";
import JuegoFinalC from "../Componentes/JuegoFinalC";
import { useState } from "react";

const Juego = () => {
  const mobile = window.innerWidth < 640;
  const [etapa, setEtapa] = useState(0);
  console.log("mobile:", mobile, "etapa:", etapa);

  return (
    <div className="flex flex-row h-full w-full justify-between">
      {(!mobile || etapa === 0) && (
        <div className="w-full h-full sm:w-1/3 relative">
          <SelectorDeDificultad setEtapa={setEtapa} />
        </div>
      )}
      {((!mobile && etapa === 0) || etapa === 1) && (
        <div className="flex sm:flex-2 sm:w-1/2 justify-center">
          <JuegoC setEtapa={setEtapa} />
        </div>
      )}
      {((!mobile && etapa === 0) || etapa === 2) && (
        <div className="flex sm:flex-2 sm:w-1/2 justify-center">
          <JuegoFinalC setEtapa={setEtapa} />
        </div>
      )}
    </div>
  );
};

export default Juego;
