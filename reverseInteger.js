const reverse = (n) => {
  let rev = 0;
  while (n > 0) {
    rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev;
};

console.log(reverse(1242));

//This solution works perfectly for the positive integers.
// Needs some of the changes for the -ve numbers.
