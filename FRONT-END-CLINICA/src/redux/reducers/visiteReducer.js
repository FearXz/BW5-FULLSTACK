import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaVisite: null,
  visitaDaEditare: null,
};

const visiteReducer = createSlice({
  name: "visiteReducer",
  initialState,
  reducers: {
    // Azione definita nello slice
    setListaVisite: (state, action) => {
      state.listaVisite = action.payload;
    },
    setVisitaDaEditare: (state, action) => {
      state.visitaDaEditare = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setListaVisite, setVisitaDaEditare } = visiteReducer.actions;
export default visiteReducer.reducer;
