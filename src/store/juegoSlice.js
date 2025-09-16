import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartas: [],
  dificultad: [],
};

const juegoSlice = createSlice({
  name: 'juego',
  initialState,
  reducers: {
    _iniciarJuego: (state, action) => {
      state.cartas = action.payload;
    },
    _resetJuego: () => initialState,
    _setDificultad: (state, action) => {
      state.dificultad = action.payload;
    }
  },
});

export const { _iniciarJuego, _resetJuego, _setDificultad } = juegoSlice.actions;
export default juegoSlice.reducer;
