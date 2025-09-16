import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user/user.slice";
import { apiSlice } from "./slice/api/api.slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});