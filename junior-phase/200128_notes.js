//code stretch

//fuzzyFilter
const fuzzyFilter = (arr, filter) => {

    const isMatch = (item, filter) => {
        const entries = Object.entries(filter)
        let match = true
        entries.forEach( entry => {
            const [key, value] = entry
            if (item[key] !== value) match = false
        });
        return match
    }

    return arr.filter( item => isMatch(item, filter))
}





console.log(fuzzyFilter([ { foo: 'bar', x: 3}, { foo: 'bar'}, { foo: 'ba', y: 1} ], { foo: 'bar' }));//[ { foo: 'bar', x: 3 }, { foo: 'bar' } ]

//you cant get out of a foreach
//it also does not return anything
const foo = {bar: 1}
JSON.stringify(foo)
