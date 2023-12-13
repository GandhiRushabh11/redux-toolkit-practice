import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const productSlice = createSlice({
  name: "Product",
  initialState: {
    isLoding: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoding = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoding = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
