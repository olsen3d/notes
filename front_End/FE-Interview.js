/* eslint-disable no-extend-native */
/* eslint-disable no-multiple-empty-lines */

//strings
//primitive type
//split() toLowerCase() substring() startsWith() endsWith()
//immutable - you cant change it
//generally its more performant to split a string into an array before manipulating
//and then .join() it back

//Object.entries(), Array.from() [...item]
//for iterables - strings, arrays, etc.






//remove dupllicates from a string

const str = 'This is is a test test string'

const removeDups = str => [...new Set(str.split(' '))].join(' ')

console.log(removeDups(str))






//flatten an array

const exampleArr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10]

const flatten = arr => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}

console.log(flatten(exampleArr))


//scope
//context that you are opertaing in - whats available
//how can you change scope??
//call apply bind

//implement bind

const foo = function(arg) {
  console.log(this.bar, arg)
}

Function.prototype.myBind = function(context) {
  const fn = this
  return function () {
    fn.call(context, ...arguments)
  }
}

// let baz = foo.bind({bar: 'hello'})
let baz = foo.myBind({bar: 'hello'})

console.log(baz('yo'))


//timing
//debounce - throttle something


const debounce = (fn, delay) => {
  let timer
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

const search = () => console.log('searching...')

const debouncedSearch = debounce(search, 5500)

console.log(debouncedSearch())


//trees
//DOM is a tree
//given 2 identical DOM trees A and B we have the location of an element in A create a fn to find that same element in tree b

const reversePath = function(element, root) {
  const path = []
  let pointer = element
  while (pointer.parent) {
    const idx = pointer.parent.children.indexOf(pointer)
    path.push(idx)
    pointer = pointer.parent
  }

  pointer = root

  while (path.length) {
    pointer = pointer.children[path.pop()]
  }

  return path
}


//rendering
//how do you render something smoothly
//translate takes it out of the dom
//render smoothly in javascript with the requestAnimationFrame() method located on the window object
//every render in the dom it makes a call to the raf
//this will never  block the UI
//DOM high res time stamp

//create a fn to mobe an element. the fn args are: distance, duration, element

const smoothMove = function(duration, distance, element) {
  const start = performance.now()

  function move(currentTime) {
    const elapsed = currentTime - start
    const progress = elapsed / duration
    const amountToMove = progress * distance

    element.style.transform = `translate(${amountToMove}px, 0)`

    if (amountToMove < distance) {
      requestAnimationFrame(move)
    }
  }

  requestAnimationFrame(move)
}