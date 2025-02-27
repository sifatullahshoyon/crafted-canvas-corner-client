import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
