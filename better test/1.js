//dont forget edge cases, negative, large, etc

//integer N -8000 to 8000

function solution(N) {
    const arr = N.toString().split('')
    if (arr[0] === '-') {
      arr.splice(1, 0, 5)
      return arr.join('') * 1
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 5) {
        arr.splice(i, 0, 5)
        return arr.join('') * 1
      }
    }
}


console.log(solution(268)) // 5268
console.log(solution(670)) // 6750
console.log(solution(870)) // 8750
console.log(solution(1206)) // 51206
console.log(solution(0)) // 50
console.log(solution(-999)) // -5999
console.log(solution(-111)) // -5111
console.log(solution(-111)) // -5111

//0.268 0.5268
//0.670 0.6750 0.5670
//0.1206 0.51206
//-0.999 -0.5999

