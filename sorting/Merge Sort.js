/* eslint-disable */

const array = Array.from(new Array(20), () => Math.floor(Math.random() * 100))

function merge(arr1, arr2) {
  let output = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      output.push(arr1[i])
      i++
    } else {
      output.push(arr2[j])
      j++
    }
  }
  while ( i < arr1.length) {
    output.push(arr1[i])
    i++
  }
  while ( j < arr2.length) {
    output.push(arr2[j])
    j++
  }
  return output
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}


const mergeSort2 = arr => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = sort(arr.slice(0, mid))
  let right = sort(arr.slice(mid))
  let output = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      output.push(left.shift())
    } else {
      output.push(right.shift())
    }
  }
  output = [...output, ...right, ...left]
  return output
}

console.log(array)
console.log(mergeSort2(array))
