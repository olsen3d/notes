/*

1198. Find Smallest Common Element in All Rows
Given a matrix mat where every row is sorted in increasing order, return the smallest common element in all rows.

If there is no common element, return -1.

Example 1:

Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
Output: 5

*/

const smallestCommonElement = matrix => {


  const findDup = (arr1, arr2) => {
    const result = []
    let first = 0
    let second = 0
    while (first < arr1.length && second < arr2.length) {
      if (arr1[first] === arr2[second]) {
        result.push(arr1[first])
        first++
        second++
      }
      else if (arr1[first] < arr2[second]) {
        first++
      } else {
        second++
      }
    }
    return result
  }

  while (matrix.length > 1) {
    matrix.push(findDup(matrix.pop(), matrix.pop()))
  }

  return matrix[0][0]

}

const input = [[1, 2, 3, 4, 5], [2, 4, 5, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9]]

console.log(smallestCommonElement(input))


/*
have a pointer at the beginning of every row
check all pointers for highest value
move all pointers up until they are at the highest value
if one goes over then restart

[1, 2, 3, 4, 5]
[2, 4, 5, 8, 10]
[3, 5, 7, 9, 11]
[1, 3, 5, 7, 9]

*/
