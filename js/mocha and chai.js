// npm i mocha chai
//git init
//echo node_modules >> .gitignore
//touch spec.js
//mocha spec.js
// ./node_modules
//in package "scripts" "test": "mocha spec.js"
//test:dev: "npm run test -- --watch"
//npm i sinon

const { expect } = require('chai')
// const sinon = require('sinon')
const map = require('./map')

const app = express()
const _app = require('supertest')(app)

describe('mapper', () => {
  describe('map', () => {

    it('map [1,2,3] without a callback...', () => {
      expect(map([1, 2, 3])).to.eql([1, 2, 3])
    })

    it('map [1,2,3] cb called 4 times', () => {
      let count = 0
      const cb = () => count++
      (map([1, 2, 3], cb))
      expect(count).to.equal(4)
    })

    // const spy = sinon.spy()
    // map([1,2,3], spy)
    // expect(spy.callCount).to.equal(4)

  })

  describe('GET /api/users', () => {
    beforeEach(async() => {
      await conn.sync({force: true})
      await Promise.all([User.create({name: 'lucy'}), User.create({name: 'moe'})])
    })
    it('return users', async() => {
      const response = await _app.get('/api/users')
      expect(response.status).to.equal(200)
      expect(response.body.length).to.equal(1)
    })
  })
})

//map.js
const map = (arr, cb) => {
  return arr.map( item => item)
}

// module.exports = map

//sinon
//spies
