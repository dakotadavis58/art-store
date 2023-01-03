import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.cart.some((item) => item.id === action.payload.id)) {
        console.log("item already in cart!");
        state.cart.find((item) => item.id === action.payload.id).quantity++;
        return;
      }
      state.cart.push({ ...action.payload, quantity: 1 });
      console.log("item added!");
    },
    subFromCart: (state, action) => {
      if (
        state.cart.some((item) => item.id === action.payload.id) &&
        state.cart.find((item) => item.id === action.payload.id).quantity > 1
      ) {
        console.log("item quantity reduced!");
        state.cart.find((item) => item.id === action.payload.id).quantity--;
        return;
      }
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log("item removed!");
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log("item removed!");
    },
    clearCart: (state, action) => {
      state.cart = initialState.cart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, subFromCart, clearCart, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
