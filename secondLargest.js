let largest = -Infinity;
let secLargest = -Infinity;

const secondLargest = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
};

let arr = [2, 4, 16, 10, 6];
const result = secondLargest(arr);
console.log(result);
