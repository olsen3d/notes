/* eslint-disable */

//find longest subarray by sum

//the sliding window approach
//https://www.youtube.com/watch?v=XFPHg5KjHoo

const arr = [1, 2, 3, 7, 5]
const s = 12
const r = [2, 4]

const findLongestSubArrayBySum = (s, arr) => {
    let result = [-1]
    let sum = 0
    let left = 0
    let right = 0

    while (right < arr.length) {
        sum += arr[right]
        while (left < right && sum > s) {
            sum -= arr[left++]
        }
        if (sum === s && (result.length === 1 || result[1] - result[0] < right - left)) {
            result = [left + 1, right + 1]
        }
        right++
    }
    return result
}

console.log(findLongestSubArrayBySum(s, arr))
