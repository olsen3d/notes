/* eslint-disable */
//house robber
//leetcode 198
//easy difficulty

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/*
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

var rob = function(nums) {
  //edge cases
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])
  
  //initialize dp array
  const result = new Array(nums.length).fill(0)
  result[0] = nums[0]
  result[1] = Math.max(nums[0], nums[1])
  
  //loop through each house and take whatever is more: 
  //the current house plus the 2nd house back
  //or just the first house back
  for (let i = 2; i < nums.length; i++) {
      result[i] = Math.max(nums[i] + result[i - 2], result[i - 1])
  }

  //last house is the highest total you can take
  return result[result.length - 1]
}







