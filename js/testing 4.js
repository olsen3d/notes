/* eslint-disable */
// give the LinkedList class a method called "insert"
// insert takes two arguments: referenceValue and insertedValue.
// a new node with the value insertedValue will be inserted in the LL immediately after the first instance of a node with the value referenceValue.
// if the LL does not contain the referenceValue, nothing happens.

class LinkedList {
  constructor(head=null, tail=null){
    this.head = head
    this.tail = tail || head
  }
  
  logAll(){
    let current = this.head
    while(current){
      console.log(current.value)
      current = current.next
    }
  }
  insert(ref, insert) {
    const newNode = new LLNode(insert)
    let current = this.head
    while(current) {
      if (current.value === ref) {
        const temp = current.next
        current.next = newNode
        newNode.next = temp
      }
      current = current.next
    }
  }
  
}

class LLNode {
  constructor(value){
    this.value = value
    this.next = null
  }
}


// const ll = new LinkedList(new LLNode(1))
// ll.insert(1,2)
// ll.insert(2,4)
// ll.insert(2,3)

// ll.logAll()

/*
1
2
3
4
*/

// given a binary tree class, give it a method called "leavesLeftToRight" which console.logs the value of each of its leaves, from the farthest left leaf to the the farthest right leaf
// a leaf of a tree is a node with no children
class BinaryTree {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
  
  addLeft(value){
    this.left = new BinaryTree(value)
  }
  
  addRight(value){
    this.right = new BinaryTree(value)
  }
  
  leavesLeftToRight(node = this){
    if (!node.left && !node.right) console.log(node.value)
    if (node.left) node.leavesLeftToRight(node.left)
    if (node.right) node.leavesLeftToRight(node.right)
  }
  
}

// const bt = new BinaryTree("the dog ate the carrot")
// bt.addLeft("the dog")
// bt.addRight("ate the carrot")
// bt.left.addLeft("the")
// bt.left.addRight("dog")
// bt.right.addLeft("ate")
// bt.right.addRight("the carrot")
// bt.right.right.addLeft("the")
// bt.right.right.addRight("carrot")

// bt.leavesLeftToRight()

/*
the
dog
ate
the
carrot
*/

// write a method for the Person class called "DescendantsDepthFirst" that console.logs each descendant, traversing depth first.

class Person {
  constructor(name, ...parents){
    this.name = name
    this.parents = parents
    this.kids = []
    this.parents.forEach(parent => parent.kids.push(this))
  }
  
  DescendantsDepthFirst(person = this){
    console.log(person.name)
    if(person.kids) person.kids.forEach(kid => person.DescendantsDepthFirst(kid))
  }
}


const otherParent = new Person("")
const george = new Person("george")
const mary = new Person("mary")
const elizabeth = new Person("elizabeth", george, mary)
const phillip = new Person("phillip")
const charles = new Person("charles", elizabeth, phillip)
const andrew = new Person("andrew", elizabeth, phillip)
const edward = new Person("edward", elizabeth, phillip)
const anne = new Person("anne", elizabeth, phillip)
const diana = new Person("diana")
const william = new Person("william", charles, diana)
const harry = new Person("harry", charles, diana)
const george2 = new Person("george", william, otherParent)
const charlotte = new Person("charlotte", william, otherParent)
const archie = new Person("archie", harry, otherParent)
const beatrice = new Person("beatrice", andrew, otherParent)
const eugenie = new Person("eugenie", andrew, otherParent)
const louise = new Person("louise", edward, otherParent)
const james = new Person("james", edward, otherParent)
const peter = new Person("peter", anne, otherParent)
const zara = new Person("zara", anne, otherParent)
const savannah = new Person("savannah", peter, otherParent)
const isla = new Person("isla", peter, otherParent)
const mia = new Person("mia", zara, otherParent)
const lena = new Person("lena", zara, otherParent)


// elizabeth.DescendantsDepthFirst()

/*
elizabeth
charles
william
george
charlotte
harry
archie
andrew
beatrice
eugenie
edward
louise
james
anne
peter
savannah
isla
zara
mia
lena
*/

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const generateEncodingRing = () => {
  const letters = alpha.split('')
  return [...alpha].reduce((accum, curr) => {
    const random = Math.floor(Math.random() * letters.length)
    accum[curr] = letters.splice(random, 1)[0]
    return accum
  }, {})
}


//generates an object. Each key maps to a random key. No key maps to the same letter; 

const encodingRing = generateEncodingRing();

// console.log(encodingRing); /* { a: 'm', b: 'f', c: 'i', d: 'j', e: 'l', f: 'd', g: 's', h: 'w', i: 'y', j: 'x', k: 'r', l: 'u', m: 'a', n: 'q', o: 'h', p: 'z', q: 't', r: 'k', s: 'p', t: 'c', u: 'g', v: 'v', w: 'o', x: 'b', y: 'n', z: 'e' }*/


// write the function "categorize" which takes an array argument and returns an object
// the object has two keys: "items", which is a copy of the input
// and "categories" which is a collection of the categories of the items in "items"
// "categories" should contain no duplicates!
// extra credit: worry about Big O.

const items = [{value: "A", category: "uppercase letter"}, {value: "B", category: "uppercase letter"}, {value: "C", category: "uppercase letter"}, {value: "c", category: "lowercase letter"}, {value: NaN, category: "number"}, {value: null, category: "???"}, {value: 71, category: "integer"}]

const categorize = (items) => {
  const categories = {}
  return items.reduce((acc, curr) => {
    if (!categories[curr.category]) {
      categories[curr.category] = 1
      acc.categories.push(curr.category)
    }
    return acc
  }, {items, categories: []})
}

// const categorizedItems = categorize(items)
// // console.log(categorizedItems)
// categorizedItems.items.forEach(item => console.log(item.value))
// categorizedItems.categories.forEach(cat => console.log(cat))

/*
A
B
C
c
NaN
null
71
uppercase letter
lowercase letter
number
???
integer
*/

// provided for you is a 2DLinkedList class and a corresponding node class.
// a 2DLL is just like a LinkedList but representing a 2D array rather than a regular array.
// nodes of a 2DLL don't just have pointers to the previous and next elements -- they have pointers to the nodes above, below, left, and right.
// to simplify things a bit, the pointers are all stored in a single array called rightDownLeftUp; the first element is the node to the right, the second is the node below, etc.
// YOUR JOB is to add a method to TwoDLinkedList called "traverseColumn", which takes an int N and a callback, then calls that callback on every element of the Nth column, in order.
// i've included a gnarly method called from2DArr -- i just used that to construct the 2DLL; you don't need to look at it at all.

class TwoDLinkedList {
  constructor(head=null, tail=null){
    this.head = head
    this.tail = tail
  }

  traverseColumn(col, fn) {
    let colNode = this.head
    for (let i = 0; i < col; i++) {
      colNode = colNode.rightDownLeftUp[0]
    }
    
    fn(colNode)

    while (colNode.rightDownLeftUp[1]) {
      colNode = colNode.rightDownLeftUp[1]
      fn(colNode)
    }
  }

  static from2DArr(arr){
    const _arr = arr.map(row => row.map(cell => new TwoDLLNode(cell)))
    for(let y = 0; y < arr.length; y++){
      for(let x = 0; x < arr[0].length; x++){
        _arr[y][x].rightDownLeftUp = [
          _arr[y][x + 1] || null,
          _arr[y+1] ? _arr[y + 1][x] : null,
          _arr[y][x - 1] || null,
          _arr[y - 1] ? _arr[y - 1][x] : null
        ]
      }
    }
    return new TwoDLinkedList(_arr[0] && _arr[0][0])
  }
}

class TwoDLLNode {
  constructor(value){
    this.value = value
    this.rightDownLeftUp = [null, null, null, null]
  }
}

const twodll = TwoDLinkedList.from2DArr([
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
])

//so, the first node will look like this:
//{ value: 1,
//  rightDownLeftUp: [ {value: 2, ...}, {value: 6, ...}, null, null ]
//}

twodll.traverseColumn(3, x => console.log(x.value))

/*
4
9
14
19
24
*/