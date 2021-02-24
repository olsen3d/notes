const arraySum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (Array.isArray(element)) {
      sum += arraySum(element)
    } else {
      sum += element
    }
  }
  return sum
}

arraySum([1, [2, 3, [4]]]) // => 10


// const summer = (arr) => {
//   if (arr.length === 0) return 0
//   let total = arr[0] + summer(arr.slice(1))
//   return total

// }

// console.log(summer([1, 2, 3, 4, 5])) // 15