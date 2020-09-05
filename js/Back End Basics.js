/* eslint-disable */

                    //-----------------
                    //|BACK END BASICS|
                    //-----------------

//install node project modules -y for all yes
'npm init -y'

//install express
'npm i express'

//install postgres
'npm i pg'

//initialize git
'git init'

//ignore all your node modules from git
'echo node_modules >> .gitignore'

                    //----------------
                    //||DEPENDENCIES||
                    //----------------

//require express
const express = require('express')
//require path => __dirname
const path = require('path')
//require the db => data layer
const db = require('./db')
//colors is nice for debugging in the terminal
const colors = require('colors')
//require uuid => GUID this is a secure random id generator
const uuid = require('uuid')
//require postgres => this is database management
const pg = require('pg')
//require sequelize => this is a wrapper that makes writing in QSL much easier
const Sequelize = require('sequelize')

                    //----------------
                    //||    APP     ||
                    //----------------

//this will be your main express app 
const app = express()

//this is middleware that should be at the top of the server => it parses incoming requests with JSON payloads for you
app.use(express.json())

//create the port for production || or local
const port = process.env.PORT || 3000

//listen and custom color console log listening
app.listen(port, () => console.log(`\n~~Hello! Listening on ${port}!~~`.bgGray.bold))

//exports - you can export specific functions or objects etc. and then bring these in to other files
module.exports =
{
    sync,
    models: {
        Product,
        Company,
        Offering
    }
}

                    //----------------
                    //||STATUS CODES||
                    //----------------
'100 continue'
'200 OK'
'201 Created'
'202 Accepted'
'204 No Content'
'404 NOT FOUND'
'500 internal server error'

                    //----------------
                    //||   ROUTES   ||
                    //----------------

//req is the request, res is the response, next is middleware

//this is a basic index get => uses path module
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

//basic get route this will find all, rend back the data, and then catch an error and pass it on through the middleware
app.get('/api/categories', (req, res, next) => {
    db.models.Category.findAll()
    .then( data => res.send(data))
    .catch(next)
})

//basic post route this will take the req.body, and create something from a sequelize model, and return a 201 status
app.post('/categories', (req, res, next) => {
    db.models.Category.create(req.body)
    .then( category => res.status(201).send(category))
    .catch(next)
})

app.delete('/api/companies/:id', (req, res, next)=> {
    db.readJSON('./companies.json')
      .then( companies => {
        const updated = companies.filter( company => company.id !== req.params.id);
        return db.writeJSON('./companies.json', updated);
      })
      .then(()=> res.sendStatus(204))
      .catch( ex => next(ex));
  });


//put this route at the end to log any errors that make their way through
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message})
})

//how to curl a POST route to get some data going
`curl localhost:3000/api/companies -X POST -d '{"name": "foo"}' -H "Content-Type:application/json"`

curl https://craft-beer-and-wine.herokuapp.com/auth/signup -X POST -d '{"email": "mike@hack.com", "password": "8888", "isAdmin": "true"}' -H "Content-Type:application/json"

curl localhost:8080/auth/signup -X POST -d '{"email": "mike4@hack.com", "password": "8888", "isAdmin": "true"}' -H "Content-Type:application/json"

//this is the router => use this if you want to split your routes up from your server into an api file. in the api file don't forget to add the router require below this one
app.use('/api', require('./api'))

//this will go in the api.js file
const router = require('express').Router()
//along with 
module.exports = router


                    //----------------
                    //||    PSQL    ||
                    //----------------

//in terminal type psql to enter psql mode dont forget that sometimes it messes up uppercase, dashes, and underscores so put names in quotes. also, always finish with a semicolon

//create a database
'create database my_db_name;'

//connect to the database
'-c my_db_name;'

//display a table
'\d products;'

//select and view all from a table
'select * from products;'

//select and view multiple columns
'select name, id, "categoryId" from products;'

                    //----------------
                    //|| SEQUELIZE  ||
                    //----------------

const conn = new Sequelize(process.env.DATABASE_URL  || 'postgres://localhost/pco_db')

//define what an ids parameters will be
const uuidDefinition = {
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    type: Sequelize.UUID
  };

//define what a names parameters will be
const nameDefinition = {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  };

  //this is a model
  const Person = conn.define('person', {
    id: uuidDefinition,
    name: nameDefinition 
  });

  //another model example
  const Product = conn.define('product',
{
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    suggestedPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
})

//virtual key
const User = conn.define('user', {
  fullName: {
    type: VIRTUAL,
    get: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
})

//you can attach methods to models like this
Product.prototype.findSimilar = function() {
    return this.findAll({ where: {categoryId: this.categoryId}})
        .then( products => products.filter( prod => prod.id !== this.id))
}
//these need to be 'function'
Product.inStockProducts = function() {
    return this.findAll({ where: { inStock: true }})
}

  //this will create a placeId column for the person
  Person.belongsTo(Place);

  //this will create a row for offerings
  Company.hasMany(Offering)

  //basic sync and seed data function
  const sync = async()=> {
    await conn.sync({ force: true });
    const _people = ['moe', 'larry', 'curly'];
    const _places = ['UWS', 'Paris', 'LA', 'SF'];
    const _things = ['foo', 'bar', 'bazz', 'quq'];
    const [[ moe, larry, curly], [UWS, Paris, LA, SF], [foo, bar, bazz, quq]] = await Promise.all([
      Promise.all(_people.map( name => Person.create({ name }))),
      Promise.all(_places.map( name => Place.create({ name }))),
      Promise.all(_things.map( name => Thing.create({ name })))
    ])}

    //update your data
    const updater = async() => {
    await Promise.all([
        moe.update({ placeId: UWS.id }),
        larry.update({ placeId: LA.id}),
        foo.update({ ownerId: moe.id}),
        bar.update({ ownerId: moe.id }),
        bazz.update({ ownerId: larry.id }),
      ])}


   app.get('/api/users', (req, res, next) => {
     User.findAll()
     .then( users => res.send(users))
     .catch(next)
   })

   //in db.js
   User.belongsTo(User, { as: 'manager'})
   User.hasMany(User, {as: 'manages', foreighnKey: 'managerId'})

   User.hasMany(Story, { foreighnKey: 'authorId'})

   app.get('/api/users', (req, res, next) => {
    User.findAll({
      include: [{
        model: User,
        as: 'manager'
      }]
    })
    .then( users => res.send(users))
    .catch(next)
  })
//multiple includes
  app.get('/api/users', (req, res, next) => {
    User.findAll({
      include: [{
        model: User,
        as: 'manager'
      },
      {
        model: User,
        as: 'manages'
      },
      Story
    ]
    })
    .then( users => res.send(users))
    .catch(next)
  })

                    //----------------
                    //||   REDUX    ||
                    //----------------

//redux is just an event emitter that keeps track of state

const { createStore, combineReducers } = Redux

const peopleReducer = (state = [], action) => {
  if (action.type === 'SET_PEOPLE') {
    state = action.people
  }
  return state
}

const reducer = combineReducers({
  people: peopleReducer
})

const fetchFoos = async() => store.dispatch( { type: 'SET_FOOS', foos: ( await axios.get('/api/foos')).data })

const addRandomFoo = async() => {
  store.dispatch({ foo: (await axios.post('/api/foos')).data, type: 'ADD_FOO'})
}

const store = createStore(reducer)

const connect = (Component) => {
  return class Connected extends React.Component {
    constructor() {
      super()
      this.state = store.getState()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
    componentDidMount() {
      this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }
    render() {
      return <Component { ...this.state } {...this.props}/>
    }
  }
}

const _Nav = ({ people }) => {
  return (
    <nav>
      <Link to='/'>Home</Link>
    </nav>
  )
}
// this makes it a connected component so you get the state
const Nav = connect(_Nav)

                    //----------------
                    //|| REACT REDUX ||
                    //----------------

//provider and connect
const { Provider, connect } = ReactRedux
//this gives us that connect component
//it makes the store available to all componnents through the connect method

//a = mapstate b=mapdispatch
//connect(a, b)
//<Provider>

//in the store file
const peopleReducer = (state = [], action) => {
  if (action.type === 'SET_PEOPLE') {
    state = action.people
  }
  if (action.type === 'ADD_PERSON') {
    state = [...state, action.person]
  }
  return state
}

const reducer = combineReducers({ people: peopleReducer})

const store = createStore(reducer)

const addRandomPerson = () => {
  const person ={ id: Math.random(), name: 'mike' }
  return { type: 'ADD_PERSON', person }
}

//in the people component file
import React from 'react'
import { connect } from 'react-redux'
import { addRandomPerson } from './store'

const _People = ({ people, addRandomPerson }) => <div>
  People = there are { people.length }
  <button onClick={ addRandomPerson }>Add Random Person</button>
</div>

const mapStateToProps = ({ poeple }) => ({ people })
const mapDispatchToProps = (dispatch) => {
  return {
    addRandomPerson: ()=> dispatch(addRandomPerson())
  }
}

const People = connect(mapStateToProps, mapDispatchToProps)(_People)

//reducers cant have axios calls etc they are just fucntions

//redux dispatch needs an object and a type and the thing you pass in
//redux store.dispatch({})

                    //----------------
                    //||   WEBPACK   ||
                    //----------------

//add a src folder
//put all your js and babel into an index.js
//get rid of script tags
//npm init to get a pckage.json
//npm i webpack webpack-cli --save-dev
//package.json make a webpack command under scripts with a --watch flag and --mode=development
// "postinstall": "webpack"
//npm run webpack
//touch webpack.config.js do the module exports thing you can just copy it
//npm i babel-loader --save-dev
//npm i @babel/core --save-dev
//in package.json  "babel": "presets": ["@babel/react"]
//npm i @babel/preset-react --save-dev
//script defer src='./dist/main.js
//git ignore dist and node_mods
//npm i react react-dom reaxct-router-dom redux react-redux --save-dev
//delete all your cdns

//imports
import React from 'react'
import ReactDOM from 'react-dom'
import { createstore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { HashRouter, Link, Route } from 'react-router-dom'

import store from './store'

//split into components like Nav.js then import
import Nav from './Nav'
//thin in Nav.js
export default Nav
//these files need import react and reactrouterDOM and if connecting react-redux

//in your component you can map state by
import { addRandomPerson } from './store'
import { userInfo } from 'os'

const _People = ({ people, addRandomPerson }) => <div>
  there are people.length
  <button onClick={ addRandomPerson }> </button>
</div>

const mapStateToProps = ({ people }) => ({ people })
const mapDispatchToProps = ( dispatch) => {
  return {
    addRandomPerson: () => dispatch(addRandomPerson())
  }
}
const People = connect(mapStateToProps, mapDispatchToProps)(_People)















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
