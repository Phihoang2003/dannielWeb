import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/products/productSlice"
import authReducer from "../features/user/userSlice"
export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})