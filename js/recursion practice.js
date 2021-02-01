// array flattener

const flatten = (arr) => {
  let flat = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat.push(...flatten(arr[i]))
    } else {
      flat.push(arr[i])
    }
  }
  return flat
}
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
// [1,2,3]

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)]
  }
  const res = capitalizeFirst(array.slice(0, -1))
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1)
  res.push(string)
  return res
}

console.log(capitalizeFirst(['car','taco','banana']))
// ['Car','Taco','Banana']


const flatten = arr => {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flatten(arr[i]))
    } else {
      flattened.push(arr[i])
    }
  }
}
