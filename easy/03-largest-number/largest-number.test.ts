import { largestNumber } from "./largest-number";

let arr1 = [2, 4, 7, 9, 19, 3, 1];
let arr2 = [9, 1, 30, 8, 19, 0, 5];
let arr3 = [7, 1, 8, 2, 0, 4, 1, 5];

test("should return 19 for arr1", () => {
  expect(largestNumber(arr1)).toBe(19);
});

test("should return 30 for arr2", () => {
  expect(largestNumber(arr2)).toBe(30);
});

test("should return 8 for arr3", () => {
  expect(largestNumber(arr3)).toBe(8);
});
