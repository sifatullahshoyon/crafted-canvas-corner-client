import { products } from "@/utils/data/productData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
