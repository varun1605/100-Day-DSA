let largest = -1;
const findLargest = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

let arr = [2, 1, 55, 212, 7, 9, 0];
const result = findLargest(arr);
console.log(result);
