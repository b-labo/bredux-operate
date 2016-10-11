/**
 * Operation types
 * @namespace types
 */
'use strict'

/** @lends types */
const types = {
  // Basic operations
  SET: 'set',
  UPDATE: 'update',
  DEL: 'del',
  // Array operations
  PUSH: 'push',
  PUSH_ALL: 'push_all',
  POP: 'pop',
  SHIFT: 'shift',
  POP_ALL: 'pop_all',
  REJECT: 'reject',
  // Boolean operations
  FLIP: 'flip',
  // Int operations
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

module.exports = types
