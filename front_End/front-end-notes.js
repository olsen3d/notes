/* eslint-disable */

// ---------------------------------------------------------->>>>
//common DOM Events ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

/*
click, contextmenu, dblclick
drag, dragenter, dragend
focus
input
keypress
load, loadeddata
*/

//----------------------------------------------------------->>>>
//Event Listener ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

addEventListener() // to add a listener

document.getElementById("myBtn").addEventListener("click", displayDate)
//The addEventListener() method attaches an event handler to the specified element.
//You can add event listeners to any DOM object not only HTML elements. i.e the window object.

removeEventListener() // to remove it

//----------------------------------------------------------->>>>
//Event Emitter ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

class MyEventEmitter {
  constructor() {
    this._events = {};
  }

  on(name, listener) {
    if (!this._events[name]) {
      this._events[name] = [];
    }

    this._events[name].push(listener);
  }

  removeListener(name, listenerToRemove) {
    if (!this._events[name]) {
      throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`);
    }

    const filterListeners = (listener) => listener !== listenerToRemove;

    this._events[name] = this._events[name].filter(filterListeners);
  }

  emit(name, data) {
    if (!this._events[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }

    const fireCallbacks = (callback) => {
      callback(data);
    };

    this._events[name].forEach(fireCallbacks);
  }
}


const myEventEmitter = new MyEventEmitter();

const handleMyEvent = (data) => {
  console.log('Was fired: ', data);
 };

 myEventEmitter.on('testEvent', handleMyEvent);

 myEventEmitter.emit('testEvent', 'hi'); // Was fired: hi

//----------------------------------------------------------->>>>
//Constructors ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

function CreateGitHubUser (userName, billingPlan) {
  this.userName = userName
  this.billingPlan = billingPlan
  this.repositories = []
}

CreateGitHubUser.prototype.createRepo = function (name) {
  this.repositories.push({name})
}

const mikeProfile = CreateGitHubUser('Mike', 'free plan')



//----------------------------------------------------------->>>>
//Classes ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

class Laptop {
  constructor(year, hd) {
    this.year = year
    this.hd = hd
  }

  checkSpecs() {
    return `this is a ${year} model with an hd size of ${hd}`
  }
}

class Macbook extends Laptop {
  constructor(year, hd, color) {
    super(year, hd)
    this.color = color
  }
}

//----------------------------------------------------------->>>>
//Array flatten ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

const flatten = arr => {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flatten(arr[i]))
    } else {
      flattened.push(arr[i])
    }
  }
}


//----------------------------------------------------------->>>>
//callback ---------------------------------------->>>>>
//----------------------------------------------------------->>>>


//A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

//----------------------------------------------------------->>>>
//this ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

/*

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

*/

// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();



//----------------------------------------------------------->>>>
// == and == and !== != ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

// == returns a Boolean true if both the operands are equal. 
// === this is the strict equal operator and only returns a Boolean true if both the operands are equal and of the same type.


//----------------------------------------------------------->>>>
// Redux ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

//redux is just an event emitter that keeps track of state


//----------------------------------------------------------->>>>
// box sizing border box ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

//Box sizing border box - including padding and border but not margin. The default does not consider padding to be part of the width

//----------------------------------------------------------->>>>
// closure ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

/*
init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
*/

//----------------------------------------------------------->>>>
// scope ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

/*
The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.
*/

//----------------------------------------------------------->>>>
// higher order component ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

//takes in a component and then renders that component - under a certain condition say for a loading component.


//----------------------------------------------------------->>>>
// hooks ---------------------------------------->>>>>
//----------------------------------------------------------->>>>

//previously class components
//hooks are react functions that hook or conmnnect you to the state and lifecycle methods from function components

//rules - only call hooks at the top level, not in loops etc.