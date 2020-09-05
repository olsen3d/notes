// Create a class called Iterator whose instances have the behavior demonstrated below.

// class Iterator {
//   constructor(arr) {
//     this.array = arr
//     this.idx = 0
//   }
//   next() {
//     const value = this.array[this.idx]
//     const done = this.idx >= this.array.length
//     this.idx++
//     return { done, value }
//   }
// }

// const arr = ["a","b","c","d","e"]
// const it = new Iterator(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


/*
{ done: false, value: 'a' }
{ done: false, value: 'b' }
{ done: false, value: 'c' }
{ done: false, value: 'd' }
{ done: false, value: 'e' }
{ done: true, value: undefined }
{ done: true, value: undefined }
{ done: true, value: undefined }
{ done: true, value: undefined }
*/

// Create a method on the Iterator class called forEach, which appropriate behavior.
// You should NOT call this.arr.forEach!

// class Iterator {
//   constructor(arr){
//     this[Symbol.iterator] = () => this
//     this.arr = arr
//     this.index = 0
//   }

//   next(){
//     const done = this.index >= this.arr.length
//     const value = this.arr[this.index++]
//     return {done, value}
//   }

//   forEach(fn) {
//     while (this.index < this.arr.length) {
//       fn(this.arr[this.index++], this.index-1)
//     }
//   }
// }


// const arr = ["a", "b", "c", "d", "e"]
// const it = new Iterator(arr)
// it.forEach(item => console.log(item))

// console.log("Let's try that again...")

// it.forEach(item => console.log(item)) 
// //produces no output

// console.log("Extra credit: with indices...")

// const it2 = new Iterator(arr)
// it2.forEach((item, index) => console.log(item, index))


/*
a
b
c
d
e
Let's try that again...
Extra credit: with indices...
a 0
b 1
c 2
d 3
e 4
*/

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

// console.log(chunk([1, 2, 3, 4, 5], 2))

// create a class called Ancestry which subclasses (i.e., extends) Iterator, and which will iterate through a person's ancestry.
// use the Person class provided for reference; do not edit it.
// the Person class gives each instance an iterator from the Ancestry class -- your job is to make the Ancestry class

class Person {
  constructor(name, ...parents){
    this[Symbol.iterator] = () => new Ancestry(this)
    this.name = name
    this.parents = parents
    this.kids = []
    parents.forEach(parent => parent.kids.push(this))
  }
}

class Ancestry {

}

class Iterator {
  constructor(arr){
    this[Symbol.iterator] = () => this
    this.arr = arr
    this.index = 0
    this.done = false
  }

  next(){
    if(this.done) return {done: true}
    const done = this.index >= this.arr.length
    const value = this.arr[this.index++]
    return {done, value}
  }
}

const martin = new Person("martin")
const alice = new Person("alice")
const agnes = new Person("agnes", martin, alice)
const lucille = new Person("lucille")
const charles = new Person("charles")
const edward = new Person("edward", charles, lucille)
const clara = new Person("clara")
const luigi = new Person("luigi")
const julia = new Person("julia")
const eugenio = new Person("eugenio")
const albina = new Person("albina", eugenio, julia)
const emidio = new Person("emidio", luigi, clara)
const john = new Person("john", edward, agnes)
const patty = new Person("patty", emidio, albina)
const peet = new Person("peet", john, patty)


const randoms = Array.from({length: 40}, () => Math.floor(Math.random() * 100))

console.log(randoms)