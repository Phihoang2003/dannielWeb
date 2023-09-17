import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"

import { authService } from "./userService"

export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
    try {
        return await authService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false,
            state.isError=true;
            state.message=action.error;
        })
    }
})

export default authSlice.reducer