import { useDispatch, useSelector } from 'react-redux';
import { _iniciarJuego, _resetJuego, _setDificultad } from '../store/juegoSlice';

const useJuego = () => {

const dispatch = useDispatch();;
const cards = useSelector((state) => state.data.value);
const dificultad = useSelector((state) => state.juego.dificultad);

const iniciarJuego = () => {
    const cartasRandom = [];
        while (cartasRandom.length < 5) {
          const cartasXDificultad = cards.filter((card) =>
            dificultad.includes(card.dificultad)
          );
          const carta =
            cartasXDificultad[Math.floor(Math.random() * cartasXDificultad.length)];
          cartasRandom.push(carta);
        }
        console.log(cartasRandom);
    dispatch(_iniciarJuego(cartasRandom));
  };

const resetJuego = () => {
    dispatch(_resetJuego());
  };

  const setDificultad = (dificultad) => {
    dispatch(_setDificultad(dificultad));
  };


const getJuego = () => {
    const juego = useSelector((state) => state.juego.cartas)
    return juego;
  };

    return { iniciarJuego, resetJuego, getJuego, setDificultad }
}

export default useJuego
