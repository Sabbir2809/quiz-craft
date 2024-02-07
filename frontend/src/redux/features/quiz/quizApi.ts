import { baseApi } from "../../api/baseApi";

const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    getAllQuizByModuleId: builder.query({
      query: (moduleId) => ({
        url: `/quiz?module=${moduleId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { usePublishQuizMutation, useGetQuizQuery, useGetAllQuizByModuleIdQuery } = quizApi;
