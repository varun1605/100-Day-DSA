const countDigits = (n) => {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
};
let num = 259;
const res = countDigits(num);
console.log(res);
