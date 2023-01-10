import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.liked.push(action.payload);
    },
    subFromLiked: (state, action) => {
      state.liked = state.liked.filter((item) => item.id !== action.payload.id);
    },
    clearLiked: (state, action) => {
      state.liked = initialState.liked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToLiked, subFromLiked, clearLiked } = likedSlice.actions;

export default likedSlice.reducer;
