const arr = [5, 3, 6, 1, 8, 7];
let length = arr.length;
let n = 0;
function sum(n) {
  //base case
  if (n > length - 1) return 0;
  const isOdd = arr[n] % 2 !== 0;
  if (isOdd) return arr[n] + sum(n + 1);
  else return 0 + sum(n + 1);
}
