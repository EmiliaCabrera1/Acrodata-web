import useJuego from "../Hooks/useJuego";
import CardChica from "./CardChica";
import { useState } from "react";

const Juego = ({ setEtapa }) => {
  const { iniciarJuego, guardarJuego, cartasJuego } = useJuego();

  const [cartasOrdenadas, setCartasOrdenadas] = useState([]);

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

  return (
    <div className="flex flex-col items-center">
      <a
        className="w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow flex justify-center items-center cursor-pointer"
        href="/juego"
      >
        CAMBIAR DIFICULTAD
      </a>
      <button
        className="mt-4 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer"
        onClick={() => {
          setCartasOrdenadas([]);
          iniciarJuego();
        }}
      >
        ELEGIR 5 CARTAS NUEVAS
      </button>
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
      <button
        className="w-72 h-12 text-center pt-1 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow cursor-pointer"
        onClick={() => {
          if (cartasOrdenadas.length < 5) {
            alert("Debes ordenar las 5 cartas para continuar");
            return;
          }
          guardarJuego(cartasOrdenadas);
          setEtapa(2);
        }}
      >
        CONTINUAR
      </button>
    </div>
  );
};

export default Juego;
