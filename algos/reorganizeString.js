//reorganize string
//leetcode #767
//difficulty: medium

/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].
*/

const reorganizeString = function(str) {
  const map = {}
  for (let i = 0; i < str.length; i++) {
    map[str[i]] ? map[str[i]]++ : map[str[i]] = 1
  }
  return map
}

console.log(reorganizeString('aaccbb')) // "abcabc"
