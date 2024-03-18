import { fetchWithAuth } from "../../functions/interceptor";
import { setLoggedProfile } from "../reducers/profileReducer";
import { setListaProprietari } from "../reducers/proprietarioReducer";

const url = "https://localhost:7069/";

export const fetchLogin = (path, loginObj) => async (dispatch) => {
  try {
    const response = await fetch(url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });

    if (response.ok) {
      const dataProfile = await response.json();
      console.log(dataProfile);
      dispatch(setLoggedProfile(dataProfile));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

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

export const fetchCreateProprietario = (proprietarioObj) => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "proprietario/addproprietario", {
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
