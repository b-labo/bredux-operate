/**
 * Operation bind for bredux
 * @module bredux-operate
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get reducer () { return d(require('./reducer')) },
  get types () { return d(require('./types')) }
}
