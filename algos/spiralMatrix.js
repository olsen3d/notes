/* eslint-disable complexity */
//spiralMatrix
//leetcode #54

/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
*/

const spiralOrder = function(matrix) {
  const result = []
  if (matrix.length === 0) return result

  let top = 0
  let bottom = matrix.length - 1
  let right = matrix[0].length - 1
  let left = 0
  const total = matrix.length * matrix[0].length

  while (result.length < total) {
    for (let i = left; i <= right && result.length < total; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom && result.length < total; i++) {
      result.push(matrix[i][right])
    }
    right--
    for (let i = right; i >= left && result.length < total; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top && result.length < total; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}

const matrix = [
                [ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]
              ]

console.log(spiralOrder(matrix))
