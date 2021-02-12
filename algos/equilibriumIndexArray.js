

const equilibrium = array => {
  let sum = array.reduce((total, current) => current + total, 0)

  let left = 0
  for (const num of array) {
    sum -= num
    console.log(left, sum)
    if (left === sum) return num
    else left += num
  }
}

//need to use a for loop so i can return an index


const array = [-7, 1, 5, 2, -4, 3, 0] // 3

console.log(equilibrium(array))
