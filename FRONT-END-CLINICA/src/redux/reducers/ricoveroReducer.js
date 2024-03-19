import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaRicoveri: null,
	ricoveroDaEditare: null,
};

const ricoveroReducer = createSlice({
	name: "ricoveroReducer",
	initialState,
	reducers: {
		// Azione definita nello slice
		setListaRicoveri: (state, action) => {
			state.listaRicoveri = action.payload;
		},
		setRicoveroDaEditare: (state, action) => {
			state.ricoveroDaEditare = action.payload;
		},
	},
});

// Esporto solo l'azione definita nello slice
export const { setListaRicoveri, setRicoveroDaEditare } =
	ricoveroReducer.actions;
export default ricoveroReducer.reducer;
