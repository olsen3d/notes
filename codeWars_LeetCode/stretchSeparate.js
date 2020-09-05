// write separate
// receives an array and returns an object
// all array's are grouped with key array and everything else is grouped under other

const separate = (arr) => {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) acc.arrays.push(item)
        else acc.other.push(item)
        return acc
    }, {arrays: [], other: []})
}

console.log(separate([{},1, [1, 2], ['a'], {}]));//{ arrays: [ [ 1, 2 ], [ 'a' ] ], other: [ {}, 1, {} ] }
