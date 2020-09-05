/* eslint-disable */
// stateMapper - write the stateMapper

const xstateMapper = ({ users, roles }) => {
    return users.map( user => {
        const role = roles.find( role => role.id === user.roleId)
        return {...user, role }
    })
}

const xusers = [
  { id: 1, name: 'moe', roleId: 5},
  { id: 2, name: 'larry', roleId: 4},
  { id: 3, name: 'lucy', roleId: 5},
  { id: 4, name: 'ethyl'},
];

const xroles = [
  { id: 5, name: 'engineering'},
  { id: 4, name: 'admin'},
];

// const processed = stateMapper({ users, roles});

// processed.forEach(user => console.log(`${user.name} is in ${user.role ? user.role.name : 'NO ROLE'}`));
/*
moe is in engineering
larry is in admin
lucy is in engineering
ethyl is in NO ROLE
*/


// fix this code that the users are not mutated when processed

const xxstateMapper = ({ users, roles})=> {
  return users.map( user => {
    const role = roles.find( role => role.id === user.roleId)
    return {...user, role }
  });
}

const xxusers = [
  { id: 1, name: 'moe', roleId: 5},
  { id: 2, name: 'larry', roleId: 4},
  { id: 3, name: 'lucy', roleId: 5},
  { id: 4, name: 'ethyl'},
];

const xxroles = [
  { id: 5, name: 'engineering'},
  { id: 4, name: 'admin'},
];

// const processed = stateMapper({ users, roles});

// processed.forEach(user => console.log(`${user.name} is in ${user.role ? user.role.name : 'NO ROLE'}`));

// console.log(users[0] === processed[0]);
/*
moe is in engineering
larry is in admin
lucy is in engineering
ethyl is in NO ROLE
false
*/

// The NonMutator
// write the NonMutator class
// it takes an initial state
// you can make changes to the non-mutator but it never mutates the state
// everytime you 'make a change' the internal state is not mutated.

// class NonMutator {
//   constructor(state) {
//     this.state = state
//   }
//   change(change) {
//     this.state = {...this.state, ...change}
//   }
// }


// const nm = new NonMutator({ x: 7});
// const state1 = nm.state;
// console.log(state1);
// nm.change({ y: 3 });
// const state2 = nm.state;
// console.log(state2);
// console.log(state1 === state2);
// nm.change({ y: 5 });
// const state3 = nm.state;
// console.log(state3);
// console.log(state2 === state3);

// { x: 7 }
// { x: 7, y: 3 }
// false
// { x: 7, y: 5 }
// false

// write the countPlurals function

// const countPlurals = (words) => words.split('').filter(word => word[word.length-1] === 's').length

// const words = 'foos bar bazzes quq fizzes buzz';
// //assume a plural word ends with an s

// console.log(countPlurals(words));
// console.log(countPlurals('x y z'));
/*
3
0
*/


// write the splatter function, it should be able to take any number of objects

const splatter = (...args) => {
  return args.reduce( (accum, curr) => {
    Object.keys(curr).forEach(key => accum[key] = curr[key])
    return accum
  }, {})
}

// const x = { a: 1 };
// const y = { b: 2 };
// const z = { c: 3, d: 4 };
// const splat = splatter(x, y, z);
// console.log(splat);
// console.log(x);
// console.log(y);
// console.log(z);
/*
{ a: 1, b: 2, c: 3, d: 4 }
{ a: 1 }
{ b: 2 }
{ c: 3, d: 4 }
*/

// write the generateArray method
//keys are at even indexes and respective values are at odd indexes

// const generateArray = obj => {
//   return Object.keys(obj).reduce( (array, key) => {
//     array.push(key)
//     array.push(obj[key])
//     return array
//   }, [])
// }

// const generateArray1 = obj => Object.keys(obj).reduce( (arr, key) => [...arr, key, obj[key]], [])

// const generateArray2 = obj => Object.entries(obj).flat()

// console.log(generateArray({
//   foo: 'bar',
//   bazz: 'quq'
// }));//['foo', 'bar', 'bazz', 'quq']
// console.log(generateArray({
//   a: 'b',
//   c: 'd',
//   e: 'f'
// }));//[ 'a', 'b', 'c', 'd', 'e', 'f' ]


// write SimpleCalc
// result defaults to 0 if no value is passed to constructor

// class SimpleCalc {
//   constructor(result = 0){
//     this.result = result
//   }
//   add(num){
//     this.result = this.result + num
//   }
// }

// const simpleCalc = new SimpleCalc();

// simpleCalc.add(1);
// simpleCalc.add(2);
// console.log(simpleCalc.result);

// const simpleCalc2 = new SimpleCalc(5);

// simpleCalc2.add(1);
// simpleCalc2.add(2);
// console.log(simpleCalc2.result);

// Grid class should represent a 2d array, but store its data as a single 1d array (called this._array)
// Should have a method called twoDim which creates and returns a 2d array
// A fill method is already provided, don't touch that

// class Grid{
//   constructor(x,y) {
//     this.x = x
//     this.y = y
//     this._array = new Array(x*y)
//   }
//   twoDim() {
//     let twoDim = []
//     for (let i = 0; i < this.y; i++) {
//       let subarray = []
//       for (let j = 0; j < this.x; j++) {
//         subarray.push(this._array.shift())
//       }
//       twoDim.push(subarray)
//     }
//     return twoDim
//   }
//   fill(){
//     for(let i = 0; i < this._array.length; this._array[i] = i++);
//   }
// }

// const theGrid = new Grid(4,3)
// console.log(theGrid._array)
// theGrid.fill()
// console.log(theGrid._array)
// const a = theGrid.twoDim()
// const b = theGrid.twoDim()
// console.log(a)
// console.log(a===b)

/*
[ <12 empty items> ]
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
[ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ] ]
false
*/

// #Add two methods to Grid: "at" and "set"

// at should take x and y coordinates and return the value at those coords
// set should take x and y coordinates and a value and set it as the value at those coords

// class Grid{
//   constructor(width, height){
//     this.height = height
//     this.width = width
//     this._array = Array(height * width)
//   }
//   at(x,y) {
//     return this.twoDim()[y][x]
//   }
//   set(x,y,val) {
//     const set = this.twoDim()
//     set[y][x] = val
//     this._array = set.flat()
//   }
//   twoDim(){
//     const output = []
//     for(let i = 0, row = 0; row < this.height; row++){
//       const inner = []
//       for(let col = 0; col < this.width; col++, i++){
//         inner.push(this._array[i])
//       }
//       output.push(inner)
//     }
//     return output
//   }
//   fill(){
//     for(let i = 0; i < this._array.length; this._array[i] = i++);
//   }
// }

// const theGrid = new Grid(4,3)
// theGrid.fill()
// console.log(theGrid.twoDim())
// console.log(theGrid.at(0,0))
// console.log(theGrid.at(3,1))
// console.log(theGrid.at(1,2))

// theGrid.set(1,2,44)
// console.log(theGrid.at(1,2))

// theGrid.set(0,0,99)
// theGrid.set(0,1,9)

// console.log(theGrid.twoDim())
// console.log(theGrid._array)


/*
[ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9, 10, 11 ] ]
0
7
9
44
[ [ 99, 1, 2, 3 ], [ 9, 5, 6, 7 ], [ 8, 44, 10, 11 ] ]
[ 99, 1, 2, 3, 9, 5, 6, 7, 8, 44, 10, 11 ]
*/

// Modify the Grid class's method "at" so that it can take two integer coordinates OR it can take just a single cell representing both coordinates.
// Modify the Grid class's method "set" so that it can take two integer coordinates and a value OR it can take just a cell and a value.
// The Cell class is provided for you; you don't need to modify it.

// class Cell{
//   constructor(x,y){
//     this.x = x
//     this.y = y
//   }
// }

// class Grid{
//   constructor(width, height){
//     this.height = height
//     this.width = width
//     this._array = Array(height * width)
//   }

//   _innerIdx(x,y){
//         return y * this.width + x
//   }

//   at(...args){
//     let x, y
//     if (typeof args[0] === 'object'){
//       x = args[0].x
//       y = args[0].y
//     } else {
//       x = args[0]
//       y = args[1]
//     }
//     return this._array[this._innerIdx(x,y)]
//   }

//   set(...args){
//     let x, y, value
//     if (typeof args[0] === 'object'){
//       x = args[0].x
//       y = args[0].y
//       value = args[1]
//     } else {
//       x = args[0]
//       y = args[1]
//       value = args[2]
//     }
//     this._array[this._innerIdx(x,y)] = value
//   }

//   twoDim(){
//     const grid = []
//     for(let idx = 0; grid.length < this.height; idx += this.width) {
//       grid.push(this._array.slice(idx, idx + this.width))
//     }
//     return grid
//   }


//   fill(){
//     for(let i = 0; i < this._array.length; this._array[i] = i++);
//   }
// }

// const theGrid = new Grid(3,3)
// const center = new Cell(1,1)
// const bottomRight = new Cell(2,2)
// const topLeft = new Cell(0,0)
// theGrid.fill()
// console.log(theGrid.twoDim())
// theGrid.set(0,0,"A")
// theGrid.set(center,"B")
// console.log(theGrid.at(topLeft))
// console.log(theGrid.at(1,1))
// console.log(theGrid.twoDim())


/*
[ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
A
B
[ [ 'A', 1, 2 ], [ 3, 'B', 5 ], [ 6, 7, 8 ] ]
*/

// create a method on Grid called getCells
// which returns a 1d array of Cell objects (see class defn below) representing the all the coordinate points in the grid

// class Cell{
//   constructor(x,y){
//     this.x = x
//     this.y = y
//   }
// }

// function isCoord(obj) {
//     return obj.x !== undefined && obj.y !== undefined
// }

// class Grid{
//   constructor(width, height){
//     this.height = height
//     this.width = width
//     this._array = Array(height * width)
//   }

//   _innerIdx(x,y){
//         return y * this.width + x
//   }

//   at(x, y){
//     if(isCoord(x))({x,y} = x)
//     return this._array[this._innerIdx(x,y)]
//   }

//   set(x, y, value){
//     if(isCoord(x))(value = y, {x,y} = x)
//     this._array[this._innerIdx(x,y)] = value
//   }

//   getCells() {
//     const cells = []
//     for(let i = 0; i < this.height; i++) {
//       for(let j = 0; j < this.width; j++) {
//         cells.push(new Cell(j,i))
//       }
//     }
//     return cells
//   }

//   twoDim(){
//     const grid = []
//     for(let idx = 0; grid.length < this.height; idx += this.width) {
//       grid.push(this._array.slice(idx, idx + this.width))
//     }
//     return grid
//   }

//   fill(){
//     for(let i = 0; i < this._array.length; this._array[i] = i++);
//   }
// }

// const theGrid = new Grid(3,3)
// theGrid.fill()
// console.log(theGrid.getCells())

// const otherGrid = new Grid(1,7)
// otherGrid.fill()
// console.log(otherGrid.getCells())

/*
[ Cell { x: 0, y: 0 },
  Cell { x: 1, y: 0 },
  Cell { x: 2, y: 0 },
  Cell { x: 0, y: 1 },
  Cell { x: 1, y: 1 },
  Cell { x: 2, y: 1 },
  Cell { x: 0, y: 2 },
  Cell { x: 1, y: 2 },
  Cell { x: 2, y: 2 } ]
[ Cell { x: 0, y: 0 },
  Cell { x: 0, y: 1 },
  Cell { x: 0, y: 2 },
  Cell { x: 0, y: 3 },
  Cell { x: 0, y: 4 },
  Cell { x: 0, y: 5 },
  Cell { x: 0, y: 6 } ]
*/

// add methods to Grid called row and col
// grid.row(3) should return the third row as an array
// grid.col(2) should return the second column.

// class Cell{
//   constructor(x,y){
//     this.x = x
//     this.y = y
//   }
// }

// function isCoord(obj) {
//     return obj.x !== undefined && obj.y !== undefined
// }

// class Grid{
//   constructor(width, height){
//     this.height = height
//     this.width = width
//     this._array = Array(height * width)
//   }

//   _innerIdx(x,y){
//         return y * this.width + x
//   }

//   _xy(idx){
//     return [idx % this.width, Math.floor(idx / this.width)]
//   }

//   at(x, y){
//     if(isCoord(x))({x,y} = x)
//     return this._array[this._innerIdx(x,y)]
//   }

//   row(num) {
//     const output = []
//     const start = num * this.width
//     for(let idx = start; idx < start + this.width; idx++) {
//       output.push(this._array[idx])
//     }
//     return output
//   }

//   col(num) {
//     const output = []
//     for(let idx = num; idx < this._array.length; idx+=this.width) {
//       output.push(this._array[idx])
//     }
//     return output
//   }

//   set(x, y, value){
//     if(isCoord(x))(value = y, {x,y} = x)
//     this._array[this._innerIdx(x,y)] = value
//   }

//   getCells(){
//     return this._array.map((_,i) => new Cell(...this._xy(i)))
//   }

//   twoDim(){
//     const output = []
//     for(let i = 0, row = 0; row < this.height; row++){
//       const inner = []
//       for(let col = 0; col < this.width; col++, i++){
//         inner.push(this._array[i])
//       }
//       output.push(inner)
//     }
//     return output
//   }

//   fill(){
//     for(let i = 0; i < this._array.length; this._array[i] = i++);
//   }
// }

// const theGrid = new Grid(5,5)
// theGrid.fill()

// console.log(theGrid.row(2))
// console.log(theGrid.col(3))

/*
[ 10, 11, 12, 13, 14 ]
[ 3, 8, 13, 18, 23 ]
*/

// add an addCol method to the Grid class
// extra credit if you can do it in only one traversal of this._array!

class Grid{
  constructor(width, height){
    this.height = height
    this.width = width
    this._array = Array(height * width)
  }

  static from(arr){
    if (arr.length === 0) return new this(0, 0)
    const that = new this(Math.max(...arr.map(row => row.length)), arr.length)
    let i = 0
    arr.forEach(row => {
        for (let x = 0; x < that.width; x++, i++) {
            that._array[i] = row[x]
        }
    })
    return that
  }

  _innerIdx(x,y){
    return y * this.width + x
  }

  at(x, y){
    return this._array[this._innerIdx(x,y)]
  }

  set(x, y, value){
    this._array[this._innerIdx(x,y)] = value
  }

  row(n){
    return this._array.slice(n*this.width, (n+1)*this.width)
  }

  col(n){
    const output = []
    for(; n < this._array.length; n += this.width){
      output.push(this._array[n])
    }
    return output
  }

  addRow(arr){
    for(let i = 0; i < this.width; i++){
      this._array.push(arr[i])
    }
    this.height++
  }

  addCol(arr) {
    let newIdx = -1
    for (let i = 0; i < arr.length; i++) {
      newIdx += arr.length + 1
      this._array.splice(newIdx, 0, arr[i])
    }
    this.width++
  }

  twoDim(){
    const output = []
    for(let row = 0; row < this.height; row++){
      output.push(this.row(row))
    }
    return output
  }

  fill(){
    for(let i = 0; i < this._array.length; this._array[i] = i++);
  }
}

const a = new Grid(5,5)
a.fill()
console.log(a.twoDim())
a.addCol(["a","b","c","d","e"])
console.log(a.twoDim())

/*
[ [ 0, 1, 2, 3, 4 ],
  [ 5, 6, 7, 8, 9 ],
  [ 10, 11, 12, 13, 14 ],
  [ 15, 16, 17, 18, 19 ],
  [ 20, 21, 22, 23, 24 ] ]
[ [ 0, 1, 2, 3, 4, 'a' ],
  [ 5, 6, 7, 8, 9, 'b' ],
  [ 10, 11, 12, 13, 14, 'c' ],
  [ 15, 16, 17, 18, 19, 'd' ],
  [ 20, 21, 22, 23, 24, 'e' ] ]
*/