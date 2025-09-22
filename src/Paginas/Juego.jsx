import useJuego from "../Hooks/useJuego";
import CardChica from "../Componentes/CardChica";
import { useState } from "react";

const Juego = () => {
  const cartasJuego = useJuego().juego;
  const { iniciarJuego } = useJuego();

  const [cartasOrdenadas, setCartasOrdenadas] = useState([]);

  const sumar = (card) => {
    console.log(cartasOrdenadas, card);
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
        className="mt-6 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow flex justify-center items-center"
        href="/juegonuevo"
      >
        CAMBIAR DIFICULTAD
      </a>
      <button
        className="mt-4 w-72 h-12 text-verde-oscuro bg-fondo-claro rounded-[10px] shadow-custom-shadow"
        onClick={() => {
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
      </div>
      <h2 className="justify-start text-verde-oscuro text-sm">
        Ordenalas para armar tu flow!!
      </h2>
      <div className="flex flex-row w-full h-full mx-4 gap-4 items-center flex-wrap justify-center">
        {cartasOrdenadas.map((card, idx) => {
          return (
            <CardChica key={idx} card={card} onClick={() => quitar(card)} />
          );
        })}
        {[...Array(5 - cartasOrdenadas.length)].map((v, index) => {
          return (
            <img src="/img/cartaVacia.svg" key={index} className="w-16 h-24" />
          );
        })}
      </div>
    </div>
  );
};

export default Juego;
