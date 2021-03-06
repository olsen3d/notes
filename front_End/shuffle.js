//fisher yates

const shuffle = arr => {
  let currentIdx = arr.length

  while (currentIdx !== 0) {
    const randomIdx = Math.floor(Math.random() * currentIdx)
    currentIdx--
    [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]]
  }

  return arr
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
