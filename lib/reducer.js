/**
 * Reducer for the store
 * @function reducer
 * @param {Object} state - State to reduce
 * @param {Object} action
 * @returns {Object} - Reduced state
 */

'use strict'

const {
  SET,
  UPDATE,
  DEL,
  PUSH,
  POP,
  SHIFT,
  POP_ALL,
  REJECT,
  FLIP,
  INCREMENT,
  DECREMENT
} = require('./types')

const { assign, clone } = require('asobj')

let or = (...values) => {
  for (let value of values) {
    let defined = typeof value !== 'undefined'
    if (defined) {
      return value
    }
  }
}

/** @lends reducer */
function reducer (state = {}, { type, payload, meta = {} }) {
  let { field: fieldName = 'default' } = meta

  switch (String(type).toLowerCase().trim()) {
    // --------------------
    // Basic operations
    // --------------------
    case SET:
      return assign({}, state, {
        [fieldName]: payload
      })
    case UPDATE:
      return assign({}, state, {
        [fieldName]: assign({}, state[ fieldName ], payload)
      })
    case DEL:
      return clone(state, {
        without: fieldName
      })
    // --------------------
    // Array operations
    // --------------------
    case PUSH: {
      let fieldState = or(state[ fieldName ], [])
      return assign({}, state, {
        [fieldName]: [ ...(fieldState), payload ]
      })
    }
    case POP: {
      let fieldState = or(state[ fieldName ], [])
      return assign({}, state, {
        [fieldName]: fieldState.slice(0, state.length - 1)
      })
    }
    case SHIFT: {
      let fieldState = or(state[ fieldName ], [])
      return assign({}, state, {
        [fieldName]: fieldState.slice(1)
      })
    }
    case POP_ALL: {
      return assign({}, state, {
        [fieldName]: []
      })
    }
    case REJECT: {
      let fieldState = or(state[ fieldName ], [])
      return assign({}, state, {
        [fieldName]: fieldState.filter((state) => state !== payload)
      })
    }
    // --------------------
    // Boolean operations
    // --------------------
    case FLIP: {
      let fieldState = or(state[ fieldName ], false)
      return assign({}, state, {
        [fieldName]: !fieldState
      })
    }
    // --------------------
    // Integer operations
    // --------------------
    case INCREMENT: {
      let fieldState = or(state[ fieldName ], 0)
      return assign({}, state, {
        [fieldName]: fieldState + 1
      })
    }
    case DECREMENT: {
      let fieldState = or(state[ fieldName ], 0)
      return assign({}, state, {
        [fieldName]: fieldState - 1
      })
    }
    default:
      console.warn(`[bredux-operate]Unknown operation: ${type}`)
      return state
  }
}

module.exports = reducer
