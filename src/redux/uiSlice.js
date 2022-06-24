import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    hambugerMenu: false,
    
  },
  reducers: {
    openHambugerMenu: (state) => {
      state.hambugerMenu = true;
      
      
    },
    closeHambugerMenu: (state) => {
      state.hambugerMenu = false;
     
    },
  },
});

export const { openHambugerMenu, closeHambugerMenu  } = uiSlice.actions;
export default uiSlice.reducer;