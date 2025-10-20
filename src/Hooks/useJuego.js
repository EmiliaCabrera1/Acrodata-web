import { useDispatch, useSelector } from "react-redux";
import {
  _iniciarJuego,
  _resetJuego,
  _setDificultad,
  _guardarJuego,
} from "../store/juegoSlice";

const useJuego = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.data?.value?.cards);
  const dificultad = useSelector((state) => state.juego.dificultad);
  const cartasJuego = useSelector((state) => state.juego.cartas);

  const iniciarJuego = () => {
    if (!cards || !dificultad) return;

    const cartasXDificultad = cards.filter((card) =>
      dificultad.includes(card.dificultad.toLowerCase())
    );
    console.log(dificultad);
    console.log(cartasXDificultad.length, "cartas");
    const cartasRandom = [];
    while (cartasRandom.length < 5 && cartasXDificultad.length > 0) {
      const carta =
        cartasXDificultad[Math.floor(Math.random() * cartasXDificultad.length)];
      if (cartasRandom.includes(carta)) return;
      cartasRandom.push(carta);
    }

    dispatch(_iniciarJuego(cartasRandom));
  };

  const resetJuego = () => {
    dispatch(_resetJuego());
  };

  const setDificultad = (nivel) => {
    dispatch(_setDificultad(nivel));
  };

  const guardarJuego = (cartasOrdenadas) => {
    dispatch(_guardarJuego(cartasOrdenadas));
  };

  return {
    iniciarJuego,
    resetJuego,
    setDificultad,
    guardarJuego,
    cartasJuego,
  };
};

export default useJuego;
