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
      console.log(matrix)
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
[ 1, 2, 3 ], 
[ 4, 5, 6 ], 
[ 7, 8, 9 ]

[ 1, 4, 3 ], 
[ 2, 5, 6 ], 
[ 7, 8, 9 ] 

[ 1, 4, 7 ], 
[ 2, 5, 6 ], 
[ 3, 8, 9 ]

[ 1, 4, 7 ], 
[ 2, 5, 6 ], 
[ 3, 8, 9 ] 

[ 1, 4, 7 ], 
[ 2, 5, 8 ], 
[ 3, 6, 9 ]

*/
