// const timer = (delay) => {
//     return (fn) => {
//         setTimeout(fn, delay * 1000)
//     }
// }
// const t1 = timer(2)
// t1(() => console.log('two seconds'))



// const hexNums = [
//     '00',
//     '33',
//     '66',
//     '99',
//     'cc',
//     'ff'
// ]

// const div = document.querySelector('div')
// div.addEventListener('click', (ev) => {
//     console.log(ev.target)
//     ev.target.style.backgroundColor = '00ff00'
// })
// //a dash in a style setting becomes camelCase

// let red = 0
// let green = 0
// let blue = 0

// for (let i = 0; i < 3; i++) {

// }

// let cols = 8
// let calc = `calc(100%/${cols})`

// console.log(calc)

//promises

const fs = require ('fs')

//reads file and takes a cb

// fs.readFile('start.txt', (err, data) => {
//     const next = data.toString().trim()
//     fs.readFile(next, (err, data) => {
//     })
// }

const pRead = (file) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(file, (err, data)=> {
            if (err) reject(err)
            else resolve(data.toString())
        })
    })
}

pRead('start.txt')
.then (result => pRead(result))
.catch (ex => console.log('ghkj'))



