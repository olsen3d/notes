/*
Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
*/

function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.apply(this, args)
    } else {
      return curried.bind(this, args)
    }
  }
}

const myFunc = (arg1, arg2) => `${arg1}, ${arg2}`

const curriedFunc = curry(myFunc)

console.log(curriedFunc(1)(2))