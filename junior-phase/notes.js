//websockets


//senior checkpoint

//dont need import and export
//look and see how the router is mounted

const routes = require('./routes')
app.use('/', routes)

//nested routes

const task = {...req.body, name: req.params.name}
res.send(task)

//git checkout to undo

//sequelize you need to set up attributes etc.
//class and instance methods

//when destroying dont forget where?

//if the test is await then you need to async
//use function keyword here for class method and you can use "this"

Task.clearCompleted = function(){ return this.destroy( { where: { complete: true }})}

//instance method is prototype you can use "this" here
Task.prototype.getTime = function() {
  return Infinity
}

//when returning a promise you dont need async await
Task.prototype.getChildren = function() {
  return task.findAll({ where: { parentId: this.id }})
}

//older version of sequelize
const mytask = await Task.findById(task.id)

type: sequelize.ENUM('great', 'good', 'meh')

const employee = (await Employee.findOne({ 
  where: { name: 'moe' },
  include: [Task]
}))

//put this in the constructor
this.adoptPet = this.adoptPet.bind(this)

adoptPet() {
  this.setState({ pettoadopt: pet})
}

//might not be any react-redux
//wont be combine reducers


const redux = require('redux')
const {createStore} = redux

const initialState = {
  foos: [],
  bars: []
}

//dont mutate by spreading the state when returning
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case set_foos:
      return {...state, foos: action.foos}
    case create_foo:
      return {...state, foos: [...state, action.foo ]}
  }
  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState)
})

store.dispatch({ type: 'something'})

const setFoos = (foos) => {
  return {
    type: 'setfoos',
    foos
  }
}
store.dispatch(setFoos([{id: 1, name: 'foo1'}]))


/*
seq models 
routes
actions creater 
reducers 
thunks
components
*/
