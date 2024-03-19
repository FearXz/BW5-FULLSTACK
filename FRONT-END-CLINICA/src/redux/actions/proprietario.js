import { fetchWithAuth } from "../../functions/interceptor";
import { setListaProprietari, setProprietario } from "../reducers/proprietarioReducer";
import { url } from "../../functions/config";

export const fetchListaProprietari = () => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "proprietario/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataProfile = await response.json();

      console.log(dataProfile);

      dispatch(setListaProprietari(dataProfile));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchProprietarioById = (id) => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "proprietario/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataProfile = await response.json();

      console.log(dataProfile);

      dispatch(setProprietario(dataProfile));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchCreateProprietario = (proprietarioObj) => async () => {
  try {
    await fetchWithAuth(url + "proprietario/addproprietario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proprietarioObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchUpdateProprietario = (proprietarioObj) => async () => {
  try {
    await fetchWithAuth(url + "proprietario/update/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proprietarioObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
