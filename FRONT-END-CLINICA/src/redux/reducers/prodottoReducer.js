import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaProdotti: null,
	singoloProdotto: null,
};

const prodottoReducer = createSlice({
	name: "prodottoReducer",
	initialState,
	reducers: {
		// Azione definita nello slice
		setListaProdotti: (state, action) => {
			state.listaProdotti = action.payload;
		},
		setSingoloProdotto: (state, action) => {
			state.singoloProdotto = action.payload;
		},
	},
});

// Esporto solo l'azione definita nello slice
export const { setListaProdotti, setSingoloProdotto } = prodottoReducer.actions;
export default prodottoReducer.reducer;
