//stretch

const randomList = (arr, count) => {
    const ret = []
    while (ret.length < count) {
        const idx = Math.floor(Math.random() * arr.length)
        const item = arr[idx]
        if (!ret.includes(item)) ret.push(item)
    }
    return ret
}

console.log(randomList(['foo', 'bar', 'bazz'], 2))

