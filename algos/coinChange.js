//coinChange
//leetcode #322

/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
*/

// const coinChange = (coins, amount) => {
//   const map = {0: 0}
//   for (let i = 1; i <= amount; i++) {
//     map[i] = amount + 1
//     for (let j = 0; j < coins.length; j++) {
//       if (coins[j] <= i) map[i] = Math.min(map[i], 1 + map[i - coins[j]])
//     }
//   }
//   console.log(map)
//   return map[amount] > amount ? -1 : map[amount]
// }

const coinChange = (coins, amount) => {
  const dpArray = new Array(amount).fill(0)
  for (let current = 1; current <= amount; current++) {
    dpArray[current] = amount + 1
    for (let coin of coins) {
      if (coin <= current) {
        dpArray[current] = Math.min(dpArray[current], 1 + dpArray[current - coin])
      }
    }
  }
  return dpArray[amount] > amount ? -1 : dpArray[amount]
}

const xcoinChange = function(coins, amount) {
  coins = coins.sort((a, b) => a - b)
  const map = {0: 0}
  for (let i = 1; i <= amount; i++) {
    map[i] = amount + 1
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) map[i] = Math.min(map[i], 1 + map[i - coins[j]])
      else break
    }
    return map[amount] > amount ? -1 : map[amount]
  }
}

console.log(coinChange([3, 5, 6], 20)) // 4
console.log(coinChange([2], 3)) // -1
console.log(coinChange([2, 3, 4, 6, 8], 24)) // 3
console.log(coinChange([474, 83, 404, 3], 264)) // 8
