// YOUR CODE HERE

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(value){
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
  }

  addToHead(value){
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.head.previous = null
    } else {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
      this.head.previous = null
    }
  }

  removeHead(){
    if (!this.head) {
      return null
    }
    if(!this.head.next){
      const prevHead = this.head
      this.head = null
      return prevHead.value
    } else {
      const prevHead = this.head
      this.head = prevHead.next 
      this.head.previous = null
      return prevHead.value
    }
  }

  removeTail(){
    if (!this.tail) {
      return null
    }
    if(!this.tail.previous){
      return this.tail.value
    } else {
      const prevTail = this.tail
      this.tail = prevTail.previous
      this.tail.next = null
      return prevTail.value
    }
  }

  search(){

  }
  
}
