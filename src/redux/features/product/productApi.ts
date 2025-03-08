import { baseApi } from "@/redux/api/baseApi";

// const productApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllProduct: builder.query({
//       query: (params: Record<string, unknown> = {}) => ({
//         url: "/products",
//         method: "GET",
//         params: params,
//       }),
//     }),
//   }),
// });
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
