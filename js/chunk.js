const chunk = ( arr, limit ) => {
  const results = []
  let temp
  arr.forEach( item => {
    if ( !temp || temp.length === limit) {
      temp = []
      results.push(temp)
    }
    temp.push(item)
  })
  return results
}

console.log(chunk([1, 2, 3, 4, 5], 2))