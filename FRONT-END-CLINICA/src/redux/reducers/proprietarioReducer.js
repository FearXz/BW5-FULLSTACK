import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaProprietari: null,
};

const proprietarioReducer = createSlice({
  name: "proprietarioReducer",
  initialState,
  reducers: {
    // Azione definita nello slice
    setListaProprietari: (state, action) => {
      state.listaProprietari = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setListaProprietari } = proprietarioReducer.actions;
export default proprietarioReducer.reducer;
