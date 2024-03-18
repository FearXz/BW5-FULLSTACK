import { store } from "../redux/store/store";

async function fetchWithAuth(url, options = {}) {
  // Ottieni il token dallo store Redux
  const state = store.getState();
  const token = state.profile.token;

  // Imposta l'intestazione di autorizzazione
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  // Esegui la richiesta fetch con le nuove intestazioni
  const response = await fetch(url, { ...options, headers });

  return response;
}

export default fetchWithAuth;
