import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createProducts = createAsyncThunk(
  "product/create-products",
  async (productData, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAProduct=createAsyncThunk("product/get-product",async(productId,thunkAPI)=>{
  try {
    return await productService.getAProduct(productId)
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})
export const updateProduct=createAsyncThunk("product/update-product",async(data,thunkAPI)=>{
  try {
    return await productService.updateProduct(data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteProduct=createAsyncThunk("product/delete-product",async(productId,thunkAPI)=>{
  try {
    return await productService.deleteProduct(productId);
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
export const resetState = createAction("Reset_all");

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProduct.fulfilled,(state,action)=>{
        state.isSuccess=true;
        state.isLoading=false;
        state.isError=false;
        state.productName=action.payload.title;
        state.productDesc=action.payload.description;
        state.productCategory=action.payload.category;
        state.productImages=action.payload.images;
        state.productPrice=action.payload.price;
        state.productBrand=action.payload.brand;
        state.productColors=action.payload.colors;
        state.productQuantity=action.payload.quantity;
        state.productTag=action.payload.tags;
      })
      .addCase(getAProduct.pending,(state,action)=>{
        state.isError=false;
        state.isSuccess=false;
        state.isLoading=true;
      })
      .addCase(getAProduct.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.isSuccess=false;
        state.message=action.error;
      })
      .addCase(updateProduct.pending,(state,action)=>{
        state.isLoading=true;
        state.isError=false;
        state.isSuccess=false;

      })
      .addCase(updateProduct.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.updatedProduct=action.payload
      })
      .addCase(updateProduct.rejected,(state,action)=>{
        state.isError=true;
        state.isLoading=false;
        state.isSuccess=false;
        state.message=action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default productSlice.reducer;