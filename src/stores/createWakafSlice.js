import React from "react";

// export const initialState = {
//   selectedIdWakaf: "",
// };
const createWakafSlice = (set) => ({
  selectedIdWakaf: "",
  selectIdWakaf: (selectedIdWakaf) => set({ selectedIdWakaf }),
});

export default createWakafSlice;
