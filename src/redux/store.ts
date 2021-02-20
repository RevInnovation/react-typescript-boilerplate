import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.reducer";
import { middlewares } from "./middlewares";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: middlewares,
});
