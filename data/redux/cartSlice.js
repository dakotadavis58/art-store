import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  cart: {
    cartItems: [],
    shippingAddress: {},
    paymentMethod: {},
  },
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
      if (state.cart.cartItems.some((item) => item.id === action.payload.id)) {
        console.log("item already in cart!");
        state.cart.cartItems.find((item) => item.id === action.payload.id)
          .quantity++;
        return;
      }
      state.cart.cartItems.push({ ...action.payload, quantity: 1 });
    },
    subFromCart: (state, action) => {
      if (
        state.cart.cartItems.some((item) => item.id === action.payload.id) &&
        state.cart.cartItems.find((item) => item.id === action.payload.id)
          .quantity > 1
      ) {
        console.log("item quantity reduced!");
        state.cart.cartItems.find((item) => item.id === action.payload.id)
          .quantity--;
        return;
      }
      state.cart.cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    deleteItem: (state, action) => {
      state.cart.cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state, action) => {
      state.cart.cartItems = initialState.cart.cartItems;
    },
    saveShippingInfo: (state, action) => {
      state.cart.shippingAddress = action.payload;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
      // check if user is in database, if not, add user to database
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  subFromCart,
  clearCart,
  deleteItem,
  saveShippingInfo,
  saveUserInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
