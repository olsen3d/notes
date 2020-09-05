// write the pluck method

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

const pluck = (arr, prop) => {
  return arr.reduce( (acc, item) => {
    acc.push(item[prop])
    return acc
  }, [])
}

pluck(stooges, 'name');//[ 'moe', 'larry', 'curly' ]
