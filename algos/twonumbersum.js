
function twoNumberSum(array, targetsum) {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1
  while (left < right) {
    const currentSum = array[left] + array[right]
    if (currentSum === targetSum) return [array[left], array[right]]
    else if (currentSum < targetSum) left ++
    else if (currentSum > targetSum) right--
  }
  return []
}
