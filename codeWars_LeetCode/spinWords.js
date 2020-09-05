/* eslint-disable eol-last */

//one liner where it will reverse each word longer than val in a string
const spinWords = (str, val) => str.split(' ').map( word => word.length >= val ? word.split('').reverse().join('') : word).join(' ')

// console.log(spinWords('Hello my name is Mike i am a warrior', 3))
// olleH my eman is ekiM i am a roirraw

//reverse all words with a length higher than the input
console.log(spinWords('stop spinning my words!', 5))
//stop gninnips my !sdrow
