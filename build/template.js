const uppercamelcase = require('uppercamelcase')

function entryTemplate({ tip, components, version }) {
  const compNames = []
  const importComponentStr = components.map(name => {
    const compName = uppercamelcase(name)
    compNames.push(compName)
    return `import ${compName} from '../packages/${name}'`
  })

  return `
    // ${tip}
    ${importComponentStr.join('\n    ')}

    const components = [${compNames.toString()}]

    const install = function(Vue) {
      components.forEach(component => Vue.component(component.name, component))
    }

    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }

    export default {
      version: '${version}',
      install,
      ${compNames.join(',\n      ')}
    }
  `
}

module.exports = entryTemplate
