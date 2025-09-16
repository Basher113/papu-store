import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    loggedOut: (state) => {
      state.currentUser = null;
    }
  }
});

export const {loggedOut, setCurrentUser} = userSlice.actions;

export default userSlice.reducer;