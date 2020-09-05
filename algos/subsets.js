//subsets
//leetcode #78

/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

const subsets = function(nums) {
  const results = []

  const generateSubsets = (current = [], idx = 0) => {
    results.push(current)
    for (let i = idx; i < nums.length; i++) {
      const newCurrent = [...current, nums[i]]
      generateSubsets(newCurrent, i + 1)
    }
  }

  generateSubsets()
  return results
}


const nums = [1, 2, 3]

console.log(subsets(nums))

