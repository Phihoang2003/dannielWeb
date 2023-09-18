import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"

import { authService } from "./userService"
import {toast} from "react-toastify"
export const registerUser=createAsyncThunk("auth/register",async(userData,thunkAPI)=>{
    try {
        
        return await authService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const loginUser=createAsyncThunk("/auth/login",async (userData,thunkAPI)=>{
    try {
        return await authService.login(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
const initialState={
    user:getCustomerfromLocalStorage,
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

            state.createdUser=action.payload;
            if(state.isSuccess){
                toast.info("User Created Successful")
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false,
            state.isError=true;
            state.message=action.error;
            if(state.isErrorerror){
                toast.error("User created failure")
            }
        })

        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user=action.payload;
            if(state.isSuccess){
                localStorage.setItem("token",action.payload.token)
                toast.info("User login SuccessFull");
            }
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.isError=true;
            state.message=action.error;
            if(state.isError){
                toast.error("User login Failure");
            }
        })
    }
})

export default authSlice.reducer