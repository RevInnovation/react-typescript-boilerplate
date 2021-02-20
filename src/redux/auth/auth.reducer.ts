import { createReducer, createSlice } from "@reduxjs/toolkit";
import { stat } from "node:fs";

const authState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
