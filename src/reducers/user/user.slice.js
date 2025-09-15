import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    }
  }
});

export const {loginStart, loginSuccess, loginFailed} = userSlice.actions;

export default userSlice.reducer;

// TODO: READ RULES OF REDUCERS in "https://redux.js.org/tutorials/essentials/part-2-app-structure#rules-of-reducers"
