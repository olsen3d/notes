//reverse vowels string
//leetcode #345
//easy difficulty

/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
*/

const reverseVowels = str => {
  const result = str.split('')
  const vowels = {a: true, e: true, i: true, o: true, u: true,
                  A: true, E: true, I: true, O: true, U: true}
  let left = 0
  let right = str.length - 1
  let temp

  while (left < right) {
    if (result[left] in vowels && result[right] in vowels) {
      temp = result[left]
      result[left] = result[right]
      result[right] = temp
      left++
      right--
    } else if (result[left] in vowels) {
      right--
    } else if (result[right] in vowels) {
      left++
    } else {
      left++
      right--
    }
  }
  return result.join('')
}

console.log(reverseVowels('hello')) // "holle"
console.log(reverseVowels('leetcode')) // "leotcede"

/*
create a const vowels
loop over the string and look for matching vowels
push them into an array, then push a placeholder into consenants array
push consenants into array
loop over consenants array and every time the placeholder comes up
unshift a vowel
*/
