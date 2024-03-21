import { fetchWithAuth } from "../../functions/interceptor";
import {} from "../reducers/animaleReducer";
import { url } from "../../functions/config";
import {
	setListaProdotti,
	setSingoloProdotto,
} from "../reducers/prodottoReducer";

export const fetchCreateProdotto = (prodottoObj) => async () => {
	try {
		await fetchWithAuth(url + "prodotto/addProdotto", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(prodottoObj),
		});
	} catch (error) {
		// Puoi gestire gli errori qui, se necessario
		console.error("Errore nel fetch:", error.message);
	}
};

export const fetchListaProdotti = () => async (dispatch) => {
	try {
		const response = await fetchWithAuth(url + "prodotto/list", {
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			const dataProdotti = await response.json();

			console.log(dataProdotti);

			dispatch(setListaProdotti(dataProdotti));
		} else {
			throw new Error("Errore nel recupero dei risultati");
		}
	} catch (error) {
		// Handle errors here, if necessary
		console.error("Errore nel fetch:", error.message);
	}
};

export const fetchProdottoById = (id) => async (dispatch) => {
	try {
		const response = await fetchWithAuth(url + "prodotto/" + id, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			const dataSingoloProdotto = await response.json();

			dispatch(setSingoloProdotto(dataSingoloProdotto));
		} else {
			throw new Error("Errore nel recupero dei risultati");
		}
	} catch (error) {
		// Handle errors here, if necessary
		console.error("Errore nel fetch:", error.message);
	}
};

export const fetchEditProdotto = (prodottoObj) => async () => {
	try {
		await fetchWithAuth(url + "prodotto/editProdotto", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(prodottoObj),
		});
	} catch (error) {
		// Puoi gestire gli errori qui, se necessario
		console.error("Errore nel fetch:", error.message);
	}
};
