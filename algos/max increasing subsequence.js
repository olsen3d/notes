function maxIncSub(nums) {
  const maxes = Array(nums.length).fill(1)
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const isIncreasing = nums[i] > nums[j]
      if (isIncreasing) maxes[i] = Math.max(maxes[i], 1 + maxes[j])
    }
  }
  return Math.max(...maxes)
}

maxIncSub([1, 2, 30, 4 ,5])

//O(n2)