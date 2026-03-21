function searchTargetElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

const res = searchTargetElement([4, 1, 5, 7, 8, 3], 13);
console.log(res);
