import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk(
  "products/get",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishList =createAsyncThunk("product/wishlist",async(proId,thunkAPI)=>{
  try {
    
    return await productService.addToWishList(proId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
const productState={
    product:"",
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
}

export const productSlice=createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(buider)=>{
        buider.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.product=action.payload;
        
        }).addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error
        })
        .addCase(addToWishList.pending,(state)=>{
          state.isSuccess=false;
          state.isError=false
          state.isLoading=true;
        })
        .addCase(addToWishList.fulfilled,(state,action)=>{
          state.isLoading=false;
          state.isError=false;
          state.isSuccess=true;
          state.addToWishList=action.payload;
          state.message="Add to wishListt successful"
        })
        .addCase(addToWishList.rejected,(state,action)=>{
          state.isLoading=false;
          state.isError=true;
          state.isSuccess=false;
          state.message=action.error;
        })
        
    }

})

export default productSlice.reducer;
