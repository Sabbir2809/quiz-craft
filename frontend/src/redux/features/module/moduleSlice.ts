import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moduleId: "",
  title: "",
};

export const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {
    setModule: (state, action) => {
      state.title = action.payload.title;
      state.moduleId = action.payload.moduleId;
    },
    // setNewModule: (
    //   state,
    //   action: PayloadAction
    // ) => {
    //   state.newModule = action.payload;
    // },
    // clearModuleTitle: (state) => {
    //   state.title = initialState.title;
    // },
  },
});

export const { setModule } = moduleSlice.actions;

export default moduleSlice.reducer;
