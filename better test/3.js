
function solution(S, K) {
  const numbers = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun'
  }
  const days = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7
  }
  const weeks = K % 7
  let day = days[S] + weeks
  if (day > 7) day = day - 7
  return numbers[day]
}

console.log(solution('Sat', 23)) // Mon
console.log(solution('Sat', 24)) // Tue
console.log(solution('Tue', 8)) // Wed
console.log(solution('Wed', 2)) // Fri
console.log(solution('Wed', 3)) // Sat
