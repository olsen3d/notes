/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars, no-throw-literal*/

//An instance is a single occurrence of an object

//Factory functions create, "set up," and return an object. Any object returned from a factory function is an "instance" of the factory function. 

//Factory Function

//htis object is how you add on to the prototype
const twitterUserInternalPrototype = {
  login() {
      return 'The user has logged in!'
  },
  logout() {
      return 'The user has been logged out!'
  }
}

const createTwitterUser = (handle) => {
  const newUser = Object.create(twitterUserInternalPrototype)
  newUser.handle = handle
  newUser.followers = 0
  return newUser
}

const mike = createTwitterUser('mikeyo')


//Constructor functions are ordinary functions invoked with the new operator and return an object ‘instance'.

function CreatGifhubUser (username, billingPlan) {
  this.username = username
  this.billingPlan = billingPlan
  this.repositories = []
}

//this is how you addd on to the prototype
CreatGifhubUser.prototype.createRepo = function (name) {
  this.repositories.push({name})
}

const david = new CreatGifhubUser('davidYang', 'free')


//Classes

//this is the prototype
class Laptop {
  constructor(year, hd) {
    this.year = year;
    this.hd = hd;
  }

  checkSpecs() {
    return `Year: ${this.year}, HD: ${this.hd}`;
  }
}

class Macbook extends Laptop {
  constructor(year, hd, color) {
    super(year, hd);
    this.color = color;
  }
}
