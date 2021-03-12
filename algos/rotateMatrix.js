/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

*/

var rotate = function(matrix) {

  //1. transpose diagonally
  for (let i = 0; i < matrix.length; i++) {
    //let j = i basically lets us move diagonally through the matrix
    for (let j = i; j < matrix.length; j++) {
      //swap diagonals
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  //2. mirror horizontally
  let left = 0
  let right = matrix.length - 1

  //2 pointer approach while loop
  while (left < right) {
    for (let i = 0; i < matrix.length; i++) {
      //swap left side for right side
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]
    }
    left++
    right--
  }

  return matrix
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
  )

/*
[1,2,3]
[4,5,6]
[7,8,9]

[3,2,1]
[6,5,4]
[9,8,7]

[7,4,1]
[8,5,2]
[9,6,3]


[5,1,9,11]
[2,4,8,10]
[13,3,6,7]
[15,14,12,16]

[11,9,1,5]
[10,8,4,2]
[7,6,3,13]
[16,12,14,15]

[15,13,2,5]
[14,3,4,1]
[12,6,8,9]
[16,7,10,11]

*/
