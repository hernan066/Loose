import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    /* loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      //state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      //state.error = true;
    }, */
    login:(state, action) => {
      state.currentUser = action.payload;
    },
    logout:(state) => {
      state.currentUser = null;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
