import { fetchWithAuth } from "../../functions/interceptor";
import { url } from "../../functions/config";
import { setListaRicoveri, setRicoveroDaEditare } from "../reducers/ricoveroReducer";

export const fetchCreateRicovero = (ricoveroObj) => async () => {
  try {
    await fetchWithAuth(url + "ricovero/addRicovero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ricoveroObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchListaRicoveri = () => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "ricovero/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataRicovero = await response.json();

      console.log(dataRicovero);

      dispatch(setListaRicoveri(dataRicovero));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchRicoveroById = (id) => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "ricovero/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataRicovero = await response.json();
      dispatch(setRicoveroDaEditare(dataRicovero));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchEditRicovero = (ricoveroObj) => async () => {
  try {
    await fetchWithAuth(url + "ricovero/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ricoveroObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
