import { caesar } from "./caesar";

test("phrases", () => {
  expect(caesar("dCode Caesar", 3)).toBe("gFrgh Fdhvdu");
});

test("wrap", () => {
  expect(caesar("Z", 1)).toBe("A");
});

test("large shift", () => {
  expect(caesar("The Odin Project", 88)).toBe("Dro Ynsx Zbytomd");
});

test("negative shift", () => {
  expect(caesar("this is a test", -69)).toBe("cqrb rb j cnbc");
});
