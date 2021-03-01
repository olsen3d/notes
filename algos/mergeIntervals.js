/*
leetcode 56 merge intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

var merge = function(intervals) {
  const result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const prevInterval = result[result.length - 1]
    const currentInterval = intervals[i]
    if (prevInterval[1] >= currentInterval[0]) {
      prevInterval[1] = currentInterval[1]
    } else {
      result.push(currentInterval)
    }
  }

  return result
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 7], [6, 8]]))
console.log(merge([[1, 5], [6, 7], [8, 9]]))
console.log(merge([[1, 6], [5, 7], [8, 11], [10, 12]]))
