import { reverseString } from "./reverseString";

test("reverses single word", () => {
  expect(reverseString("boobytrap")).toBe("partyboob");
});

test("reverses multiple words", () => {
  expect(reverseString("where art thou")).toBe("uoht tra erehw");
});

test("reverses long words including punctuation", () => {
  expect(reverseString("Supercalifragilisticexpialidocious!!")).toBe(
    "!!suoicodilaipxecitsiligarfilacrepuS"
  );
});
