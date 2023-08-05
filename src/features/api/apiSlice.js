import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'cat'
    }),
    getProduct: builder.query({
      query: () => 'items'
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `items?id=${id}`
    })
  })
})

export const { useGetProductQuery, useGetCategoriesQuery, useGetSingleProductQuery } = apiSlice;