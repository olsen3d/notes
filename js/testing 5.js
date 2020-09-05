

const sum = (x) => {
  return function(y) {
    return y ? sum(x + y) : x
  }
}

// console.log(sum(1)(2)(3)(4)())

// console.log(true < 1)

function func() {
  console.log(arguments)
}

func(1, 2, 3)
