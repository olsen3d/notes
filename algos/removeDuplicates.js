/* eslint-disable */
//remove duplicates
//idk leetcode or not but probably easy difficulty

//remove all duplicates from an array of positive integers

const xremoveDupes = arr =>  Array.from(new Set(arr))

const zremoveDupes = arr => {
  const map = {}
  for (let char of arr) {
    map[char] = 1
  }
  return Object.keys(map).map(char => parseInt(char))
}

const removeDupes = arr => {
  
}

console.log(removeDupes([1, 2, 3, 4, 1, 1, 2, 5]))
