/*
https://leetcode.com/problems/jump-game/

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

*/

var canJump = function(nums) {
  let lastIdx = nums.length - 1

  for (let i = nums.length -1; i >= 0; i--) {
      if (i + nums[i] >= lastIdx) lastIdx = i
  }

return lastIdx === 0
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([2, 0, 1, 1]))

/*

[2, 3, 1, 1, 4]

[2, 0, 1]

*/
