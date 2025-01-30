/*
Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element
*/
const inputArr = [2, 3, 1, 5, 7, 9, 8, 4, 6];

function selectionsortArray(arr) {
  let arrayLength = arr.length;
  for (let x = 0; x < arrayLength; x++) {
    let minIndex = x;
    for (let y = x + 1; y < arrayLength; y++) {
      if (arr[y] < arr[minIndex]) {
        minIndex = y;
      }
    }
    let temp = arr[x];
    arr[x] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log("🚀 ~ selectionsortArray ~ arr:", selectionsortArray(inputArr));
