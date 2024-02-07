import { createSlice } from "@reduxjs/toolkit";

// types
type TQuiz = {
  module: string;
  question: string;
  description: string;
  options: string[];
  correctOption: string;
};

type TInitialState = {
  quiz: TQuiz[];
  question: string;
  description: string;
  options: string[];
  correctOption: string;
};

// initial state
const initialState: TInitialState = {
  quiz: [],
  question: "",
  description: "",
  options: [],
  correctOption: "",
};

// slice
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quiz.push({
        module: action.payload,
        question: state.question,
        description: state.description,
        options: state.options,
        correctOption: state.correctOption,
      });
    },
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setOptions: (state, action) => {
      state.options.push(action.payload);
    },
    setCorrectOption: (state, action) => {
      state.correctOption = action.payload;
    },
    resetQuizForm: (state) => {
      (state.question = ""), (state.description = ""), (state.options = []), (state.correctOption = "");
    },
    resetQuizPublish: (state) => {
      state.quiz = [];
    },
  },
});

// export
export const {
  addQuiz,
  setQuestion,
  setDescription,
  setOptions,
  setCorrectOption,
  resetQuizForm,
  resetQuizPublish,
} = quizSlice.actions;
export default quizSlice.reducer;
