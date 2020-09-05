//reacto
//intersection 2 arrays
//2 sorted arrays
//return the intersection
//unique vals for each


function intersection (arr1, arr2) {
  const result = []
  const map = {}
  arr1.forEach( val => {
    map[val] = true
  })
  arr2.forEach( val => {
    if (map[val]) result.push(val)
  })
  return result
}

function xintersection (arr1, arr2) {
  let first = 0
  let second = 0
  const result = []

  while (first < arr1.length && second < arr2.length) {
    if (arr1[first] === arr2[second]) {
      result.push(arr1[first])
      first++
      second++
    }
    if (arr1[first] < arr2[second]) {
      first++
    } else {
      second++
    }
  }
  return result
}


console.log(intersection([1,4,9,10,11], [2,3,4,5,8,10]))

// should return [4, 10]
//(numbers can be in any order)

console.log(intersection([5,4,1,7,2], [4,2,3,5]))

// should return [5, 4, 2]
//(numbers can be in any order)
