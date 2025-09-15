import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartas: [],
};

const juegoSlice = createSlice({
  name: 'juego',
  initialState,
  reducers: {
    _iniciarJuego: (state, action) => {
      state.cartas = action.payload;
    },
    _resetJuego: () => initialState,
  },
});

export const { _iniciarJuego, _resetJuego } = juegoSlice.actions;
export default juegoSlice.reducer;
