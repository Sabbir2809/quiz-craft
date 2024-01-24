import { createSlice } from "@reduxjs/toolkit";

// types
type TQuiz = {
  module: string;
  question: string;
  description: string;
  options: string[];
  correctOptions: string[];
};

type TAction = {
  payload: TQuiz;
};

type TInitialState = {
  quiz: TQuiz[];
};

// initial state
const initialState: TInitialState = {
  quiz: [],
};

// slice
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action: TAction) => {
      state.quiz.push(action.payload);
    },
  },
});

// export
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
