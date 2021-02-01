

const reverse = (str) => {
  //return str.split('').reverse().join('')
  const reversed = []
  for (let i = str.length; i > 0; i--) {
    reversed.push(str[i])
  }
  return reversed.join('')
}


console.log(reverse('Hello World'))
