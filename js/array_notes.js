/* eslint-disable */
//array notes 

// Odd Couple

oddCouple = (arr) => {
    let newArr = []
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (el % 2 === 1) {
        if (counter < 2) {
          newArr.push(el)
          counter++
        }
      }
    }
    return newArr
  }
  
  oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
  
  // My Includes
  
  myIncludes = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (el === val) {
        return true
      }
    }
    return false
  }
  
  myIncludes([10, 20, 30], 20); // => true
  
  // My Last Index Of
  
  function myLastIndexOf (arr, val, startIdx) {
    if (startIdx === undefined) {
      startIdx = arr.length - 1
    }
  
    for (let i = startIdx; i >= 0; i--) {
      let el = arr[i]
      if (el === val) {
        return i
      }
  
    }
    return -1
  }
  
  myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
  
  
  // My Reverse
  
  myReverse = (arr) => {
    let reversed = [] 
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
  }
  
  myReverse([1, 2, 3, 4, 5, 6]);
  
  
  //my unshift
  
  myUnshift = (arr, val) => {
    let shifted = []
    shifted.push(val, ...arr)
    return shifted
  }
  
  myUnshift([1, 2, 3], 0); // => [0, 1, 2, 3];
  
  
  // Even and Odd
  
  function evenAndOdd (arr) {
    let newEven = []
    let newOdd = []
    let newEvenOdd = []
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (el % 2 === 0) {
        newEven.push(el)
      } else {
        newOdd.push(el)
      }
    }
    return [newEven, newOdd]
  }
  
  evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
  
  // Array Flattener
  
  arrayFlattener = (arr) => {
    let newArr = []
  
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (Array.isArray(el)) {
        newArr.push(...el)
      } else {
        newArr.push(el)
      }
    }
      return newArr
  }

  const arrayFlattener2 = (arr) => {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
      let el = arr[i]
      if (Array.isArray(el)) {
        newArr.push(...el)
      } else {
        newArr.push(el)
      }
    }
    return newArr
  }
  
  arrayFlattener([1, [2, 3], 4]); // => [1, 2, 3, 4]
  
  
  // Zoo Inventory
  
  zooInventory = (arr) => {
    let zooArr = []
      for (let i = 0; i < arr.length; i++) {
        zooArr.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}`)
      }
      return zooArr
  }
  
  let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
  
  zooInventory(zoo);
  
  
  // Make Grid
  
  makeGrid = (numCols, numRows) => {
    let grid = []
    let cols = []
  
    for (let i = 0; i < numCols; i++) {
      cols.push(i + 1)
    }
    for (let i = 0; i < numRows; i++) {
      grid.push(cols)
    }
    return grid
  }
  
  makeGrid(6, 20);
  