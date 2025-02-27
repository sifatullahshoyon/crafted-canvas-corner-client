import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/pages/Home/FeaturedProducts/FeaturedProducts";

const initialState = {
  products: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
