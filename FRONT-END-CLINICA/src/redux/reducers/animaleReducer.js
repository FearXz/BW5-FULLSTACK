import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listaAnimali: null,
  animaleDaEditare: null,
};

const animaleReducer = createSlice({
  name: "animaleReducer",
  initialState,
  reducers: {
    // Azione definita nello slice 
    setListaAnimali: (state, action) => {
      state.listaAnimali = action.payload;
    },
    setAnimaleDaEditare: (state, action) => {
      state.animaleDaEditare = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setListaAnimali, setAnimaleDaEditare } = animaleReducer.actions;
export default animaleReducer.reducer;
