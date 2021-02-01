/*
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.
Therefore the output is 7.
*/

var combinationSum4 = function(nums, target) {
    const result = new Array(target + 1).fill(0)
    result[0] = 1

    for (let i = 0; i <= target; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] <= i) {
          result[i] = result[i] + result[i - nums[j]]
        }
      }
    }
    return result[target]
}


console.log(combinationSum4([1, 2, 3], 4))


/*
const combinationSum4 = (nums, target) => {
  let ary = new Array(target+1).fill(0);
  ary[0]=1;

  for (let i=0; i<=target; i++) {
    for (let n=0; n<nums.length; n++) {
      if (nums[n] <= i) {
        ary[i] = ary[i]+ary[i-nums[n]];
      }
    }
  }

  return ary[target];
};
*/
