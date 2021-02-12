/* eslint-disable */

function solution(S) {
  const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
  const map = {}
  const isBalanced = new Array(S.length).fill(0)
  const array = S.split('')
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) map[array[i]] = true 
  }
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (lower.includes(element)) element = element.toUpperCase()
    else element = element.toLowerCase()
    if (element in map) isBalanced[i] = 1
  }
  let longestSubString = -1
  let currentSubString = 0
  for (let i = 0; i < isBalanced.length; i++) {
    if (isBalanced[i] === 1) {
      currentSubString++
    }else {
      if (currentSubString > longestSubString) longestSubString = currentSubString
      currentSubString = 0
    }
    if (i === isBalanced.length - 1) {
      if (currentSubString > longestSubString) longestSubString = currentSubString
    }
  }
  return longestSubString <= 1 ? -1 : longestSubString
}

console.log(solution('azABaabza')) // 5 -> 'ABaab'
console.log(solution('TacoCat')) // -1 -> none
console.log(solution('AcZCbaBz')) // 8 -> 'acZCbaBz'
console.log(solution('eaAbBcd')) // 4 -> 'aAbB'
console.log(solution('ezzzaAbBcZdC')) // 4 -> 'aAbB'

/*
is balanced = true
[1,2,2,2,2,1,1]
[2,1,2,2,2,2,2,1,2]
*/