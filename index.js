const SimpleCore = require('simplerdf-core')
const SimpleFromJson = require('simplerdf-fromjson')
const SimpleHydra = require('simplerdf-hydra')

module.exports = SimpleCore.extend(SimpleFromJson).extend(SimpleHydra)
