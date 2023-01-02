import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likedReducer from "./likedSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    liked: likedReducer,
  },
});
