//code stretch

const obj1 = {
    foo: true,
    bar: 1
}
const obj2 = {
    foo: true,
    bar: 567
}

const isMatch = (target, matcher) => {
    const entries = Object.entries(matcher)
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        if (target[key] !== value) {
            return false
        }
    }
    return true
}


console.log(isMatch(obj1, obj2))

