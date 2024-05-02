import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetToDosQuery } = baseApi;
