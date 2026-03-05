let min = Infinity;

const minimimNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
let arr = [4, 2, -53, 1, -6, -3, 5];
const result = minimimNumber(arr);
console.log(result);
