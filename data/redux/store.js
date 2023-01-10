import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likedReducer from "./likedSlice";
import storage from "redux-persist/lib/storage";

export default configureStore({
  reducer: {
    cart: cartReducer,
    liked: likedReducer,
  },
});

// const persistConfig = {
//   key: "primary",
//   storage,
//   whitelist: ["cart"], // place to select which state you want to persist
// };
