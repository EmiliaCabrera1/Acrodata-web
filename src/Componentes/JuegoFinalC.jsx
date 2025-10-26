import useJuego from "../Hooks/useJuego";
import CardChica from "./CardChica";
import CardDetalle from "./CardDetalle";
import { useState } from "react";

const JuegoFinalC = ({ etapa }) => {
  const { cartasJuego } = useJuego();
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="w-[100vw] flex text-center px-2">
      <div className="flex flex-col items-center">
        <a
          className="mb-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow flex justify-center items-center cursor-pointer sm:hidden"
          href="/juego"
        >
          ELEGIR 5 CARTAS NUEVAS
        </a>
        <div className="flex flex-row w-full h-full mx-4 gap-4 items-center flex-wrap justify-center">
          {etapa !== 2 &&
            [...Array(5)].map((card, idx) => {
              return (
                <img
                  key={idx}
                  src="/img/cardVacia.svg"
                  className="w-27 h-36 p-2 object-contain bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                />
              );
            })}
          {etapa === 2 &&
            cartasJuego.map((card, idx) => {
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
          <div className="flex fixed inset-0 h-[80vh] my-auto items-center justify-center bg-green-900/20 w-full">
            <CardDetalle
              card={selectedCard}
              onClick={() => setSelectedCard(null)}
            />
          </div>
        )}
        <h2 className="justify-start text-verde-oscuro text-md my-6">
          Podes grabar tu flow y compartirlo con nosotros en redes sociales !!
        </h2>
        <a
          className="p-2  items-center pt-3 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer"
          href="https://www.instagram.com/acroyoga.data/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-64 h-8" src="/icon/instagramOscuro.svg" />
        </a>
      </div>
    </div>
  );
};

export default JuegoFinalC;
