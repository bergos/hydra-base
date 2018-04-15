const context = require('simplerdf-hydra/context')
const HydraBase = require('.')

function documentation (iri, hydraClasses) {
  const documentation = new HydraBase(context, iri)

  documentation['@type'] = context.ApiDocumentation

  hydraClasses.forEach(hydraClass => {
    documentation.graph().addAll(hydraClass.api().graph())
    documentation.supportedClass.push(hydraClass.api().iri())
  })

  return documentation
}

module.exports = documentation
