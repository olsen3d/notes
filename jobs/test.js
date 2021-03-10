//reverse a string

const str = 'hello world'

// const reverseString = str => {
//   const result = []
//   const split = str.split('')
//   while (split.length) {
//     result.push(split.pop())
//   }
//   return result.join('')
// }

const reverseString = str => {
  if (str === '') return ''
  else return revereeString(str.slice(1)) + str[0]
}

console.log(reverseString(str))
