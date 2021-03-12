const sum = (arg1) => {

  const newFunc = (arg2) => {
    newFunc.valueOf = () => arg1 + arg2
    return arg1 + arg2
  }

  return newFunc
}

const summer = sum(1)

console.log(summer(1))
console.log(summer(1).valueOf() === 2)
