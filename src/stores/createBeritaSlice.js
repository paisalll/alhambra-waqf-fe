import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  IsNews: "",
};
export const createBeritaSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setIsNews: (state, action) => {
      state.IsNews = action.payload;
    },
  },
});
export const { setIsNews } = createBeritaSlice.actions;
export default createBeritaSlice.reducer;
