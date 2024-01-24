import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveStepper: (state, actions) => {
      state.activeStep = actions.payload;
    },
  },
});

export const { setActiveStepper } = stepperSlice.actions;
export default stepperSlice.reducer;
