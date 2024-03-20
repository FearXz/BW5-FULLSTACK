import { fetchWithAuth } from "../../functions/interceptor";
import { setAnimaleDaEditare, setListaAnimali } from "../reducers/animaleReducer";
import { url } from "../../functions/config";

export const fetchCreateAnimale = (animaleObj) => async () => {
  try {
    await fetchWithAuth(url + "animale/addAnimale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animaleObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchListaAnimali = () => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "animale/list", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataAnimali = await response.json();

      console.log(dataAnimali);

      dispatch(setListaAnimali(dataAnimali));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchAnimaleById = (id) => async (dispatch) => {
  try {
    const response = await fetchWithAuth(url + "animale/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const dataAnimale = await response.json();
      
      dispatch(setAnimaleDaEditare(dataAnimale));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    // Handle errors here, if necessary
    console.error("Errore nel fetch:", error.message);
  }
};

export const fetchEditAnimale = (animaleObj) => async () => {
  try {
    await fetchWithAuth(url + "animale/editanimal", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animaleObj),
    });
  } catch (error) {
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
