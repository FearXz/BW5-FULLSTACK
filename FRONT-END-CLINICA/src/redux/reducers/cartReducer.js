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
      

      const newCart = [...state.cart];
      const existingProductIndex = newCart.findIndex((product) => product.idProdotto === action.payload.idProdotto);

      if (existingProductIndex >= 0) {
        newCart[existingProductIndex].quantita += 1;
        state.cart = newCart;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantita: 1 }];
      }
      console.log("Carrello", state.cart);
    },
    removeFromCart: (state, action) => {
      console.log("Rimosso dal carrello", action.payload);
      const index = state.cart.findIndex((product) => product.idProdotto == action.payload.idProdotto);

      if (index != -1) {
        const newCart = [...state.cart];
        newCart.splice(index, 1);
        state.cart = newCart;
      }
      console.log("Carrello", state.cart);
    },
  },
});

// Esporto solo l'azione definita nello slice
export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
