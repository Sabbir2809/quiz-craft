import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import moduleReducer from "./features/module/moduleSlice";
import quizReducer from "./features/quiz/quizSlice";
import stepperReducer from "./features/stepper/stepperSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quiz: quizReducer,
    stepper: stepperReducer,
    module: moduleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
