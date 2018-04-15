const context = require('simplerdf-hydra/context')
const HydraBase = require('.')

function fromJSON (json) {
  return HydraBase.fromJSON(json, context)
}

module.exports = fromJSON
