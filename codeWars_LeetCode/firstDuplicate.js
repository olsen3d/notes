/* eslint-disable eol-last */
/* eslint-disable quotes */

const array = [1, 4, 3, 2, 5, 3, 4, 1, 7]

const firstDuplicate = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[Math.abs(array[i]) - 1] < 0) return Math.abs(array[i])
        else array[Math.abs(array[i]) - 1] = -array[Math.abs(array[i]) - 1]
    }
    return -1
}

console.log(firstDuplicate(array))

