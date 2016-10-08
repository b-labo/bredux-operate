/**
 * Test case for reducer.
 * Runs with mocha.
 */
'use strict'

const reducer = require('../lib/reducer.js')
const types = require('../lib/types.js')
const assert = require('assert')
const co = require('co')

describe('reducer', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Reducer', () => co(function * () {
    let state = {}
    {
      let reduced = reducer(state, {
        meta: {
          field: 'hoge'
        },
        type: types.SET,
        payload: 'This is hoge'
      })
      assert.deepEqual(reduced, { hoge: 'This is hoge' })
    }
  }))
})

/* global describe, before, after, it */
