import { calculator } from "./calculator";

test("adds 2 and 4", () => {
  expect(calculator.add(2, 4)).toEqual(6);
});

test("adds 100 and 800", () => {
  expect(calculator.add(100, 800)).toEqual(900);
});

test("adds 0 and 0", () => {
  expect(calculator.add(0, 0)).toEqual(0);
});

test("subtract 10 and 5", () => {
  expect(calculator.subtract(10, 5)).toEqual(5);
});

test("subtract 200 and 350", () => {
  expect(calculator.subtract(200, 350)).toEqual(-150);
});

test("multiply 2 and 3", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test("multiply 9 and 9", () => {
  expect(calculator.multiply(9, 9)).toEqual(81);
});

test("divide 100 and 2", () => {
  expect(calculator.divide(100, 2)).toEqual(50);
});

test("divide 2 and 0", () => {
  expect(calculator.divide(2, 0)).toEqual(Infinity);
});
