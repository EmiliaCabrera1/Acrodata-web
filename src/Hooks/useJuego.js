import { useDispatch, useSelector } from 'react-redux';
import { _iniciarJuego, _resetJuego } from '../store/juegoSlice';

const useJuego = () => {

    const dispatch = useDispatch();
const juego = useSelector((state) => state.juego.cartas);

const iniciarJuego = (nuevasCartas) => {
    dispatch(_iniciarJuego(nuevasCartas));
  };

const resetJuego = () => {
    dispatch(_resetJuego());
  };

const getJuego = () => {
    return juego;
  };

    return { iniciarJuego, resetJuego, getJuego }
}

export default useJuego
