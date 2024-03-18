//slice reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    // Azione definita nello slice
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { setFirstState } = profileReducer.actions;
export default profileReducer.reducer;
