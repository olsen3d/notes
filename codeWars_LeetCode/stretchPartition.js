// write the partition function

const partition = (arr, fn) => {
    const trues = arr.filter( item => fn(item))
    const falses = arr.filter( item => !fn(item))
    return [trues, falses]
}

console.log(partition([1, 2, 3, 4], (x)=> x % 2 === 1));//[ [ 1, 3 ], [ 2, 4 ] ]

console.log(partition([1, 2, 3, 4], (x)=> typeof x === 'string'));//[ [], [ 1, 2, 3, 4 ] ]
console.log(partition([1, 'a', 'b', 2, 3, 4], (x)=> typeof x === 'string'));//[ [ 'a', 'b' ], [ 1, 2, 3, 4 ] ]