const arr = [5, 3, 2, 0, 1, 1];
let n = arr.length - 1;

function sum(n) {
  if (n == 0) return arr[0];
  return arr[n] + sum(n - 1);
}
const result = console.log(sum(arr.length - 1));
