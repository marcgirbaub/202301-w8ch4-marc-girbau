import {
  appendNumberActionCreator,
  calculatorReducer,
} from "./calculatorSlice";
import { CalculatorState } from "./types";

describe("Given a calculatorReducer reducer", () => {
  describe("When it receives an action to append a number with the currentState with number 4 of the calculator and the number 3", () => {
    test("Then it should return the new state with the number 43", () => {
      const numberToAppend = 3;
      const calculatorState: CalculatorState = {
        operator: "",
        currentNumber: "4",
        previousNumber: "",
      };
      const expectedNumber = "43";

      const appendNumberAction = appendNumberActionCreator(numberToAppend);

      const newCalculatorState = calculatorReducer(
        calculatorState,
        appendNumberAction
      );

      expect(newCalculatorState).toStrictEqual({
        ...calculatorState,
        currentNumber: expectedNumber,
      });
    });
  });
});
