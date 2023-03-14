import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const formStepSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment_Form_Step: (state) => {
      if (state.value >= 1 && state.value < 4) state.value += 1;
    },
    decremenet_Form_Step: (state) => {
      if (state.value > 1 && state.value <= 4) state.value -= 1;
    },
  },
});

export const { increment_Form_Step, decremenet_Form_Step } =
  formStepSlice.actions;

export default formStepSlice.reducer;
