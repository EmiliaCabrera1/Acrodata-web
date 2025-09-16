import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = import.meta.env.VITE_GOOGLE_URL;

export const fetchSheetData = createAsyncThunk('data/fetchSheetData', async () => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSheetData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSheetData.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(fetchSheetData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
