// import { configureStore } from "@reduxjs/toolkit";
// // import { useDispatch, useSelector } from "react-redux";
// import beritaReducer from "./createBeritaSlice";
// // import wakafReducer from "./createWakafSlice";

// export const useStore = configureStore({
//   reducer: {
//     news: beritaReducer,
//     // wakaf: wakafReducer,
//   },
// });
import { create } from "zustand";
import { persist } from "zustand/middleware";
import createWakafSlice from "./createWakafSlice";

// export const useStore = create(
//   persist(
//     (set, get) => ({
//       ...createWakafSlice(set, get),
//     }),
//     { name: "alhambra-storage", version: 2 },
//   ),
// );

// export default useStore;
export const useStore = create(
  (...a) => ({
    ...createWakafSlice(...a),
    // ...createFishSlice(...a),
  }),
  {
    name: "main-storage",
    whitelist: ["selectedIdWakaf"],
    version: 3,
  },
);
