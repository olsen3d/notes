/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:

  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list

  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/


/* DO NOT MODIFY */
const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];
/* DO NOT MODIFY */


/** YOUR CODE BELOW **/

class Food {
  constructor(root, data) {
    this._root = root
    this._data = data
  }

  createEntry(item) {
    const element = document.createElement('div')
    element.innerHTML = `${item.image} - ${item.name}`
    element.setAttribute('id', item.id)
    return element
  }

  render() {
    const fragment = new DocumentFragment()
    this._data.forEach((item) => {
      const newElement = this.createEntry(item)
      fragment.appendChild(newElement)
    })

    this._root.appendChild(fragment)

    document.addEventListener('click', (event) => {
      if (event.target.id) {
        const removed = document.getElementById(event.target.id)
        removed.remove()

      }
    })
  }


}

const renderFood = new Food(rootElement, foodData)

renderFood.render()
