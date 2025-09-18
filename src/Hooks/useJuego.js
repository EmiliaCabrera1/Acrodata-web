import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import {
  _iniciarJuego,
  _resetJuego,
  _setDificultad,
} from "../store/juegoSlice";

const useJuego = () => {
  const dispatch = useDispatch();

  const juego = useSelector((state) => state.juego.cartas);

  const iniciarJuego = () => {
    const state = store.getState();
    const dificultad = state.juego?.dificultad;
    const cards = state.data?.value;

    if (!cards || !dificultad) return;

    const cartasXDificultad = cards.filter((card) =>
      dificultad.includes(card.dificultad)
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

  return { iniciarJuego, resetJuego, setDificultad, juego };
};

export default useJuego;
