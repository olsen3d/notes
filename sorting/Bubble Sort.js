

const arr = Array.from(new Array(20), () => Math.floor(Math.random() * 100))

const bubbleSort = array => {
  let swap = true
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swap = false
      }
    }
    if (swap) break
  }
  return array
}

console.log(arr)
console.log(bubbleSort(arr))
