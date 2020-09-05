//stretch

// const fill = (count, value) => {
//     return Array(count).fill(value)
// }

const fill = (count, value) => {
    const results = []
    while (results.length < count) {
        results.push(typeof value === 'object' ? {...value} : value)
    }
    return results
}

const a1 = fill(3, true)

const a2 = fill(4, 42)

const x = {foo: 'bar'}
const a3 = fill(2, x)
console.log(a3)
console.log(a3[0] === a3[1])
//we want this to be false so all the values (objects) are unique
