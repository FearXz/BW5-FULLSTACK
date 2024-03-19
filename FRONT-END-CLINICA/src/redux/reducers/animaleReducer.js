import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaAnimali: null,
};

const animaleReducer = createSlice({
  name: "animaleReducer",
  initialState,
  reducers: {
    // Azione definita nello slice
    setListaAnimali: (state, action) => {
      state.listaAnimali = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setanimaleReducer } = animaleReducer.actions;
export default animaleReducer.reducer;
