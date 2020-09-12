//repeated substring pattern
//leetcode #459
//easy difficulty

/*

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

*/

var repeatedSubstringPattern = function(s) {
  for (let i = s.length / 2; i >= 1; i--) {
    if (s.length % i === 0) {
      const num_repeats = s.length / i
      const substring = s.slice(0, i)
      let fullstring = ''
      console.log(num_repeats, substring, fullstring)
      for (let j = 0; j < num_repeats; j++) {
        fullstring += substring
        console.log(num_repeats, substring, fullstring)
      }
      if (fullstring === s) return true
    }
    return false
  }
};

console.log(repeatedSubstringPattern('ababababababab'))
console.log(repeatedSubstringPattern('ababc'))
