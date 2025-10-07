import useJuego from "../Hooks/useJuego";
import CardChica from "../Componentes/CardChica";
import CardDetalle from "../Componentes/CardDetalle";
import { useState } from "react";

const JuegoFinal = () => {
  const cartasJuego = useJuego().juego;
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <a
        className="my-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow flex justify-center items-center cursor-pointer"
        href="/juegonuevo"
      >
        ELEGIR 5 CARTAS NUEVAS
      </a>
      <div className="flex flex-row w-full h-full mx-4 gap-4 items-center flex-wrap justify-center">
        {cartasJuego.map((card, idx) => {
          return (
            <CardChica
              key={idx}
              card={card}
              forma="grande"
              onClick={() => setSelectedCard(card)}
            />
          );
        })}
      </div>
      {selectedCard && (
        <div className="flex fixed inset-0 h-[60dvh] items-center justify-center bg-green-900/20 w-full">
          <CardDetalle
            card={selectedCard}
            onClick={() => setSelectedCard(null)}
          />
        </div>
      )}
      <a
        className="my-4 w-72 h-12 text-center pt-3 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer"
        href="/juegofinal"
      >
        CONTINUAR
      </a>
    </div>
  );
};

export default JuegoFinal;
