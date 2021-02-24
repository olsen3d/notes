/* eslint-disable guard-for-in */
/*
keypad
[ Enter a word ]
[A, E, L, P, S, X, Y]

input:
wordlist: ['APPLE', 'PLEAS', 'PLEASE']
keypads: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

output: [0, 1, 3, 2, 0]

first letter of keypad is guaranteed to be in the word that opens the door

come up with as many words as possible to test on the keypads

words are 5 letters long

*/

class mainTree {
  constructor(string) {
    this.insertWord(string)
  }

  insertWord(string) {
    let node = this
    for (const letter of string) {
      if (!(letter in node)) node[letter] = {}
      node = node[letter]
    }
    node['***'] = true

  }

  search(keypad, first, node = this, hasFirst = false) {
    let count = 0
    for (const letter in node) {
      if (letter in keypad) {
        if (letter === first) console.log('first')
        count = count + this.search(keypad, first, node[letter], hasFirst)
      }
      if (letter === '***') {
        count++
      }
    }
    return count
  }
}

const wordlist = ['APPLE', 'PLEAS', 'PLEASE']
const keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']

const tree = new mainTree('APPLE')
for (const word of wordlist) {
  tree.insertWord(word)
}

const mapped = keypads.map(keypad => {
  const obj = {}
  for (const key of keypad) obj[key] = true
  return obj
})

//console.log(JSON.stringify(tree, null, 2))

console.log(tree.search(mapped[3], Object.keys(mapped[3])[0]))