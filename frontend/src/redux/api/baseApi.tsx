import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_APP_SERVER_URL}/api` }),
  endpoints: (builder) => ({
    getAllModules: builder.query({
      query: () => ({
        url: `/module`,
        method: "GET",
      }),
    }),
    publishQuiz: builder.mutation({
      query: (data) => ({
        url: `/quiz`,
        method: "POST",
        body: data,
      }),
    }),
    getQuiz: builder.query({
      query: () => ({
        url: `/quiz`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllModulesQuery, usePublishQuizMutation, useGetQuizQuery } = baseApi;
