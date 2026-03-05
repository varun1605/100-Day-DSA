function isPalindrome(num) {
  if (num < 0) {
    return false;
  }
  let copyNum = num;
  let reverseNumber = 0;
  while (num > 0) {
    let remainder = num % 10;
    reverseNumber = reverseNumber * 10 + remainder;
    num = Math.floor(num / 10);
  }
  if (reverseNumber == copyNum) {
    return true;
  } else return false;
}
console.log(isPalindrome(-221));
