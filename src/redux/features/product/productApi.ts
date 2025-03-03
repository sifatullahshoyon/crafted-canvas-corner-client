import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (params: Record<string, unknown> = {}) => ({
        url: "/products",
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
