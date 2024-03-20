import { fetchWithAuth } from "../../functions/interceptor";
import { setListaVisite, setVisitaDaEditare } from "../reducers/visiteReducer";
import { url } from "../../functions/config";

export const fetchCreateVisita = (visitaObj) => async () => {
  try {
    await fetchWithAuth(url + "visita/addVisita", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitaObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchListaVisite = () => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "visita/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataVisite = await response.json();

      console.log(dataVisite);

      dispatch(setListaVisite(dataVisite));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchVisitaById = (id) => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "visita/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataVisita = await response.json();
      dispatch(setVisitaDaEditare(dataVisita));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchEditVisita = (visitaObj) => async () => {
  try {
    await fetchWithAuth(url + "visita/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitaObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
