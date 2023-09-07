import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authService from "./authService";
const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;


const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/admin-login",
  async (userData, thunkApi) => {
    try {
      console.log({userData});
      return await authService.login(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(login.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isSuccess=true;
        state.user=action.payload
        state.isError=false
        state.message="success"
    })
    .addCase(login.rejected,(state,action)=>{
        state.isError=true;
        state.isSuccess=false;
        state.isLoading=false;
        state.message=action.error;
    })
  },
});
export default authSlice.reducer