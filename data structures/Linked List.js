
class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.previous = null
  }
}
class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
  addToTail(value){
    const node = new Node(value)
    if (!this.tail){
      this.tail = node
      this.head = node
    }
    else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
  }
  addToHead(value){
    const node = new Node(value)
    if (!this.head){
      this.head = node
      this.tail = node
    }
    else {
      this.head.previous = node
      node.next = this.head
      this.head = node
    }
  }
  removeHead(){
    if (!this.head){
      return
    }
    const value = this.head.value
    if (this.head === this.tail){
      this.head = null
      this.tail = null
    }
    else {
      this.head = this.head.next
      this.head.previous = null
    }
    return value
  }
  removeTail(){
    if (!this.tail){
      return
    }
    const value = this.tail.value
    if (this.head === this.tail){
      this.head = null
      this.tail = null
    }
    else {
      this.tail = this.tail.previous
      this.tail.next = null
    }
    return value
  }
  search(value){
    if (!this.head){
      return null
    }
    let current = this.head
    while (current){
      if (typeof value === 'function' ? value(current.value) : current.value === value){
        return current.value
      }
      current = current.next
    }
    return null
  }
}

const ll = new LinkedList

ll.addToHead('one')
ll.addToHead('two')
ll.addToHead('three')

console.log(ll.tail)
