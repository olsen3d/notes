/* eslint-disable eol-last */
/* eslint-disable quotes */

const countLettersAndDigits = (str) => {
    const count = str.match(/[a-z]|[A-Z]|[0-9]/g)
    if (count) return count.length
    else return 0
}


console.log(countLettersAndDigits("asdflkj7890*()(*()(*"))