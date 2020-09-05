/* eslint-disable no-unused-vars */

//firstNonRepeatingCharacter
//leetcode #387
//easy

/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

Note: You may assume the string contains only lowercase English letters.
*/

//solution(s)

//O(n^2)
const xfirstNonRepeatingCharacter = str => {
  for (let i = 0; i < str.length; i++) {
    let seenDuplicate = false
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        seenDuplicate = true
        break
      }
    }
    if (!seenDuplicate) return str[i]
  }
  return -1
}


//O(n)
const firstNonRepeatingCharacter = str => {
  const map = {}
  for (let i = 0; i < str.length; i++) {
    map[str[i]] ? map[str[i]]++ : map[str[i]] = 1
  }
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) return str[i]
  }
  return -1
}

console.log(firstNonRepeatingCharacter('leetcode')) //return 0 or 'l'
console.log(firstNonRepeatingCharacter('loveleetcode')) // return 2 or 'v'
console.log(firstNonRepeatingCharacter('aaeeiioouu')) // return -1
