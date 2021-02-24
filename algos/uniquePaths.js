/*
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

*/

// var uniquePaths2 = function(m, n) {
//   const dpArray = new Array(m).fill(new Array(n).fill(1))
//   for (let i = 1; i < m; i++) {
//       for (let j = 1; j < n; j++) {
//           dpArray[i][j] = dpArray[i - 1][j] + dpArray[i][j - 1]
//       }
//   }
//   return dpArray[m - 1][n - 1]
// };


// var uniquePaths = function(m, n) {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   const goRight = uniquePaths(m, n - 1);
//   const goDown = uniquePaths(m - 1, n);
//   return goRight + goDown
// };

var uniquePaths = function(m, n, memo = {}) {
  const key = `${ m }, ${ n }`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  const goRight = uniquePaths(m, n - 1, memo);
  const goDown = uniquePaths(m - 1, n, memo);
  memo[key] = goRight + goDown;
  return memo[key];
};

console.log(uniquePaths(7, 3))


/*

dp solution
[1, 1, 1]
[1, 2, 3]
[1, 3, 6]

*/