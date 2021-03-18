import { analyze } from "./arrayAnalysis";

test("array with 1 item", () => {
  const object = analyze([3]);
  expect(object).toEqual({ average: 3, min: 3, max: 3, length: 1 });
});

test("array with multiple items", () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("array with 0 item", () => {
  const object = analyze([]);
  expect(object).toEqual({});
});
