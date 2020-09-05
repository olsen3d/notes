//longest common prefix
//leetcode #14
//easy difficulty

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs) {
    let longestCommon = ''
    if (strs === null || strs.length === 0) return longestCommon
    let idx = 0
    for (const char of strs[0]) {
      for (let i = 1; i < strs.length; i++) {
        if (char !== strs[i][idx]) return longestCommon
      }
      longestCommon += char
      idx++
    }
    return longestCommon
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ""
