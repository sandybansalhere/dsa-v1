import { searchElement } from "./search-element";

let arr = [2, 1, 6, 9, 7, 0];

test("should return 2 for element 6", () => {
  expect(searchElement(arr, 6)).toBe(2);
});

test("should return -1 for element 55", () => {
  expect(searchElement(arr, 55)).toBe(-1);
});

test("should return 0 for element 2", () => {
  expect(searchElement(arr, 2)).toBe(0);
});
