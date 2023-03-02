import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorState } from "./types";

const initialState: CalculatorState = {
  operator: "",
  currentNumber: "",
  previousNumber: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    appendNumber: (currentState, action: PayloadAction<number>) => ({
      ...currentState,
      currentNumber: currentState.currentNumber + `${action.payload}`,
    }),
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { appendNumber: appendNumberActionCreator } =
  calculatorSlice.actions;
