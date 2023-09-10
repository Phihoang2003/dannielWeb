import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice.js";
import customerReducer from "../feature/customer/customerSlice.js";
import productReducer from "../feature/product/productLSlice.js"
import brandReducer from "../feature/brand/brandSlice.js"
import pCategoryReducer from "../feature/pcategory/pcategorySlice"
import colorReducer from "../feature/color/colorSlice.js"
import bCategoryReducer from "../feature/bcategory/bcategorySlice.js"
import blogReducer from "../feature/blog/blogSlice"
import couponReducer from "../feature/coupon/couponSlice.js"

import uploadReducer from "../feature/upload/uploadSlice.js"
export const store=configureStore({
    reducer:{
        auth:authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pCategory: pCategoryReducer,
        color: colorReducer,
        bCategory: bCategoryReducer,
        blogs: blogReducer,
        coupon: couponReducer,
        upload: uploadReducer,
        
    }
})