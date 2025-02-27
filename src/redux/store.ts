import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/product/productSlice";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  // rtk query middleware
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
