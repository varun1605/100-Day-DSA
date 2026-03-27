var isPowerOfFour = function (n) {
  if (n == 1) return true;
  if (n < 1 || n % 4 !== 0) return false;
  return isPowerOfFour(n / 4);
};
var isPowerOfThree = function (n) {
  if (n == 1) return true;
  if (n < 1 || n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};
