/* eslint-disable */
//script source to load React

//reactjs.org

// refer to 200207_notes for a react app geting and setting states


<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<div id='root'></div>
const root = document.querySelector('#root')

//first arg is the element to create, 
//second arg is an object of the properties to assign 'props'
//anything after that are going to be the children
ReactDOM.render(React.createElement('hr', { className: 'red' }), root)

const redHR = React.createElement('hr', { className: 'red' })
//you can also pre define your arg into a variable
reactDOM.render(redHR, root)

//this is an example of creating a div, no props, and 3 children
const app = React.createElement('div', null, redHR, blueHR, greenHR)

const colors = [ 'red', 'blue', 'green']
// when mapping over an array of data react will want you to assign a key prop to your elements
const hrs = colors.map( color => React.createElement('hr', { key: color, className: color }))

//you can also put all this in a function as long as you return a React element at the end
const App = () => {
    const colors = [ 'red', 'blue', 'green']
    const lis = colors.map( color => {
        React.createElement('li', { key: color, style: color })
        const app = React.createElement('ul', null, lis)
        return app
    })
}

//this will create a react webpage with the app function called twice
const div = React.createElement('div', null, React.createElement(App), React.createElement(App))
ReactDOM.render(div, root)

//presentational components and stateful components

//every time the state changes render() is called

