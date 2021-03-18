import { capitalize } from "./capitalize";

test("hello world to Hello World", () => {
  expect(capitalize("hello world")).toBe("Hello World");
});

test("coMMuniTy to Community", () => {
  expect(capitalize("coMMuniTy")).toBe("Community");
});

test("movie Secretary to Movie Secretary", () => {
  expect(capitalize("movie Secretary")).toBe("Movie Secretary");
});

test("i'M a pRograMMER! to I'm A Programmer!", () => {
  expect(capitalize("i'M a pRograMMER!")).toBe("I'm A Programmer!");
});

test("close but no cigar to Close But No Cigar", () => {
  expect(capitalize("close but no cigar")).toBe("Close But No Cigar");
});
