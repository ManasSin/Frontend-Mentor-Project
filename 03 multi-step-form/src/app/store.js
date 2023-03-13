import { configureStore } from "@reduxjs/toolkit";
import formStepSlice from "../feature/counter/formStepSlice";

export const store = configureStore({
  reducer: {
    counter: formStepSlice,
  },
});
