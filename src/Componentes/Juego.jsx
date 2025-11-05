import useJuego from "../Hooks/useJuego";
import CardChica from "./CardChica";
import { useState, useEffect } from "react";
import PopUpError from "./PopUpError";

const Juego = ({ etapa, setEtapa }) => {
  const { iniciarJuego, guardarJuego, cartasJuego } = useJuego();

  const [cartasOrdenadas, setCartasOrdenadas] = useState([]);
  const [showError, setShowError] = useState(false);

  const sumar = (card) => {
    setCartasOrdenadas([
      ...cartasOrdenadas.filter((c) => c.nombre !== card.nombre),
      card,
    ]);
  };
  const quitar = (card) => {
    setCartasOrdenadas([
      ...cartasOrdenadas.filter((c) => c.nombre !== card.nombre),
    ]);
  };

  useEffect(() => {
    etapa === 1 && setCartasOrdenadas([]);
  }, [etapa]);

  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <a
          className="w-72 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow flex justify-center items-center cursor-pointer sm:hidden py-2"
          href="/juego"
        >
          CAMBIAR DIFICULTAD
        </a>
      </div>
      <div>
        <button
          className="mt-4 w-72 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer sm:hidden py-2"
          onClick={() => {
            setCartasOrdenadas([]);
            iniciarJuego();
          }}
        >
          ELEGIR 5 CARTAS NUEVAS
        </button>
      </div>
      <div className="flex flex-row w-full h-full p-4 gap-10 items-center flex-wrap justify-center">
        {cartasJuego.map((card, idx) => {
          return (
            <CardChica key={idx} card={card} onClick={() => sumar(card)} />
          );
        })}
        {[...Array(5 - cartasJuego.length)].map((v, index) => {
          return (
            <div
              key={index}
              className="p-1 flex items-center justify-center w-18 h-24 bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              <img
                src="/img/cardVacia.svg"
                key={index}
                className="w-18 h-24 p-1 object-contain"
              />
            </div>
          );
        })}
      </div>
      <h2 className="justify-start text-verde-oscuro text-md mb-2">
        Ordenalas para armar tu flow!!
      </h2>
      <div className="flex flex-row w-full h-full p-4 gap-10 items-center flex-wrap justify-center">
        {cartasOrdenadas.map((card, idx) => {
          return (
            <CardChica key={idx} card={card} onClick={() => quitar(card)} />
          );
        })}
        {[...Array(5 - cartasOrdenadas.length)].map((v, index) => {
          return (
            <div
              key={index}
              className="p-1 flex items-center justify-center w-18 h-24 bg-fondo-claro rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              <img
                src="/img/cardVacia.svg"
                className="w-18 h-24 p-1 object-contain"
              />
            </div>
          );
        })}
      </div>
      {showError && (
        <PopUpError
          mensaje="Debes ordenar las 5 cartas antes de continuar"
          onClick={() => setShowError(false)}
        />
      )}
      <div>
        <button
          className="w-72 text-center pt-1 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer my-8 sm:h-12 sm:w-50"
          onClick={() => {
            if (cartasOrdenadas.length < 5) {
              setShowError(true);
              return;
            }
            guardarJuego(cartasOrdenadas);
            setEtapa(2);
          }}
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
};

export default Juego;
