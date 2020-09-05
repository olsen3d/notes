// YOUR CODE HERE

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value
    this.count = 1
    this.left = null;
    this.right = null;
  }

  insert(value){

    const newNode = new Node(value)
    
    this.count++

    let current = this
    while(true){
         if (value === current.value) return undefined

           if (value < current.value) {
             if (current.left === null) {
               current.left = newNode
               return newNode
             }
             current = current.left
           } else {

            if (current.right === null) {
                 current.right = newNode
                 return newNode
               }
               current = current.right
             
        }   
    }
    
  }

  contains(val){
    let current = this
    
    while(current){
      if(val === current.value) return true
      if (val < current.value) {
        current = current.left
      } else if (val > current.value){
        current = current.right
      }
      else return false
    }
    return false
  }

  depthFirstForEach(){
    let current = this;
    let arr = [];
    while(current){
        if (!current.left && !current.right ) {
          arr.push(current.value)
          // current = current.right
        }
        if (current.left){
            current = current.left
            // arr.push(current.value)
        }
        
    }
    return arr
  }

  breadthFirstForEach(){

  }
  size(){
    return this.count;
  }
  
}