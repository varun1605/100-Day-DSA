let val = 3;
const removeElement = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
};
let arr = [3, 4, 3, 3, 6, 8];
const res = console.log(removeElement(arr));
