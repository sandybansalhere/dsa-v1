/**
 * Write a function that returns the count of negative numbers in an array
 *
 * Example: 1
 * Input: arr = [1, 4, -5, 8, -9, 0]
 * Ouput: 2
 *
 * Example:
 * Input: arr = [1, 4, 5, 8, 9, 0]
 * Ouput: 0
 */

export function negativeNumberCount(arr: number[]) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }

  return count;
}
