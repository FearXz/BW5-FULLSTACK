import { fetchWithAuth } from "../../functions/interceptor";
import { setLoggedProfile } from "../reducers/profileReducer";
import { setListaProprietari, setProprietario } from "../reducers/proprietarioReducer";
import { setAnimaleDaEditare, setListaAnimali } from "../reducers/animaleReducer";
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

export const fetchUpdateProprietario = (proprietarioObj) => async () => {
  try {
    const response = await fetchWithAuth(url + "proprietario/update/", {
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

export const fetchCreateAnimale = (animaleObj) => async () => {
  try {
    const response = await fetchWithAuth(url + "animale/addAnimale", {
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
    const response = await fetchWithAuth(url + "animale/editanimal", {
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
