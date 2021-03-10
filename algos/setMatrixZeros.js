/*
73. Set Matrix Zeroes
Medium

Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/


var setZeroes = function(matrix) {
  const zeroCols = []
  const zeroRows = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroCols.push(i)
        zeroRows.push(j)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroCols.includes(i) || zeroRows.includes(j)) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix

}

const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]

console.log(setZeroes(matrix1))
console.log(setZeroes(matrix2))

/*

[1, 1, 1]
[1, 0, 1]
[1, 1, 1]

[0,1,2,0]
[3,4,5,2]
[1,3,1,5]

[1,Z,Z,1]
[Z,1,0,1]
[Z,0,1,1]

[0,1,1,1]
[1,1,1,1]
[1,0,1,1]
*/
