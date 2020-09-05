/* eslint-disable */
class BinarySearchTree {
  constructor(value) {
    this.value = value
    this._size = 1
  }

  insert(value) {
    this._size++
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value)
      } else {
        this.left.insert()
      }
    } else if (!this.right) {
        this.right = new BinarySearchTree(value)
      } else {
        this.right.insert()
      }
  }
  contains(value) {
    let exists = false
    this.depthFirstForEach( _value => {
      if (_value === value) {
        exists = true
      }
    })
    return exists
  }
  breadthFirstForEach(fn) {
    const q = [this]
    while (q.length) {
      const current = q.shift()
      if (current.left) {
        q.push(current.left)
      }
      if (current.right) {
        q.push(current.right)
      }
      fn(current.value)
    }
  }
  depthFirstForEach(fn, order='in-order') {
    if (this.left) this.left.depthFirstForEach(fn, order)
    fn(this.value)
    if (this.right) this.right.depthFirstForEach(fn, order)
  }
  size() {
    return this._size
  }
}

const bst = new BinarySearchTree(50)

bst.insert(10)
bst.insert(5)
bst.insert(60)
bst.insert(80)
bst.insert(45)
bst.insert(65)
bst.insert(20)

console.log(bst.contains(10))//true
console.log(bst.contains(7))//false