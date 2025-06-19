import { negativeNumberCount } from "./negative-number-count";

let arr1 = [1, 4, -5, 8, -9, 0];
let arr2 = [1, 4, 8, 8, -9, 0];
let arr3 = [1, 4, 8, 8, 10, 0];

test("should return 2 for arr1", () => {
  expect(negativeNumberCount(arr1)).toBe(2);
});

test("should return 1 for arr2", () => {
  expect(negativeNumberCount(arr2)).toBe(1);
});

test("should return 0 for arr3", () => {
  expect(negativeNumberCount(arr3)).toBe(0);
});
