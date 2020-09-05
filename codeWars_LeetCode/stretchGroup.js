/* eslint-disable */

const group = (arr, fn) => {
    return arr.reduce( (acc , item) => {
        const prop = fn(item)
        if (!acc[prop]) acc[prop] = []
        acc[prop].push(item)
        return acc
    }, {})
}


// write the group function
let grouped = group([1, 2, 3], (i)=> i % 2 ? 'even' : 'odd');
console.log(grouped);
//{ even: [ 1, 3 ], odd: [ 2 ] }

grouped = group([1, 2, 3], (i)=> i >= 2 ? 'gte 2' : 'lt2');
console.log(grouped);
// //{ lt2: [ 1 ], 'gte 2': [ 2, 3 ] }

grouped = group(['a', 'b', 1, 2, 3],(i) => typeof i === 'number' ? 'numbers' : 'not numbers');
console.log(grouped);
//{ 'not numbers': [ 'a', 'b' ], numbers: [ 1, 2, 3 ] }


const groupByDataType = (arr) => {
    return arr.reduce( (acc, curr) => {
        const prop = typeof curr
        acc[prop] = acc[prop] || []
        acc[prop].push(curr)
        return acc
    }, {})
}

console.log(groupByDataType([
  1, 2, 3
]));//{ number: [ 1, 2, 3 ] }
console.log(groupByDataType([
  1, 'a', 'b', true, false, [], new Date(), true, {}
]));/*
  string: [ 'a', 'b' ],
  boolean: [ true, false, true ],  object: [ [], 2020-03-03T20:54:30.720Z, {} ] }
  */
  //date will be current date!