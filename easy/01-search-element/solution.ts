export function searchElement(arr: number[], targetElement: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetElement) {
      return i;
    }
  }

  return -1;
}
