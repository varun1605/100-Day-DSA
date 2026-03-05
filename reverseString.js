const reverseString = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
    //here we are using the 3rd variable to swap the values
  }
  return arr;
};
let arr = ["H", "E", "L", "L", "O"];
const res = console.log(reverseString(arr));
