function merge(left, right) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

let left = [1, 3, 5, 7];
let right = [2, 4, 8, 9];
console.log(merge(left, right));
