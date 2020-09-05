/* eslint-disable */

//Node helper class
//a piece of data - val
//a reference to the next node - .next

//pros insertion and deletion are O(1)
//cons searching and access are O(N)

//excellent alternative to arrays when insertion and deletion are frequently requied
//there is no index just a .next so no random access
//list data structures like this is the foundation for other data structures like Stacks and Queues

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let pre = current
    while(current.next) {
      pre = current
      current = current.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if(this.length === 0) return undefined
    let shifted = this.head
    this.head = shifted.next
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return shifted
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(idx) {
    if (idx < 0 || idx > this.length) return null
    let count = 0
    let current = this.head
    while (count < idx) {
      current = current.next
      count++
    }
    return current
  }
  set(idx, val) {
    const node = this.get(idx)
    if(node) {
      node.val = val
      return node
    } else {
      return false
    }
  }
  insert(idx, val) {
    if (idx <0 || idx > this.length) return false
    if (idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)
    const newNode = new Node(val)
    const prev = this.get(idx - 1)
    const temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined
    if (idx === 0) return this.shift()
    if (idx === this.length) return this.pop()
    const prev = this.get(idx - 1)
    const removed = prev.next
    prev.next = removed.next
    this.length--
    return removed
  }
  reverse() {
    let node = this.head
    let next
    let prev = null
    this.head = this.tail
    this.tail = node
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
  print() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

const list = new SinglyLinkedList

list.push('this')
list.push('is')
list.push('a')
list.push('linked')
list.push('list')
list.print()

// console.log(JSON.stringify(list, null, 2));
