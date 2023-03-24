import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
import beritaReducer from "./createBeritaSlice";

export const useStore = configureStore({
  reducer: {
    news: beritaReducer,
  },
});
