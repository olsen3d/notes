/* eslint-disable */
//Binary Search

const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor(left + right / 2)
  
  while (left <= right) {
    if (arr[mid] === target) return mid
    if (arr[mid] > target) right = mid -1
    else left = mid + 1
    mid = Math.floor(left + right / 2)
  }
  return -1
}

const arr = [0, 1, 21, 33, 45, 61, 71, 72, 73]

console.log(binarySearch(arr, 33)) // 3
console.log(binarySearch(arr, 70)) // -1
