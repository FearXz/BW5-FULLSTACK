import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    // Azione definita nello slice
    addToCart: (state, action) => {
      let newCart = [...state.cart];

      // Verifico se il prodotto è già presente nel carrello
      let found = newCart.find((item) => item.idProdotto === action.payload.idProdotto);
      if (found) {
        // Se il prodotto è già presente nel carrello, incremento la quantità
        found.quantita++;
      } else {
        // Se il prodotto non è presente nel carrello, lo aggiungo
        newCart.push(action.payload);
      }
      state.cart = newCart;
      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.cart];
      let found = newCart.find((item) => item.idProdotto === action.payload.idProdotto);
      if (found) {
        if (found.quantita > 1) {
          found.quantita--;
        } else {
          newCart = newCart.filter((item) => item.idProdotto !== action.payload.idProdotto);
        }
      }
      state.cart = newCart;
      console.log(state.cart);
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
