import Component from '../packages/component'
import Component1 from '../packages/component1'

const components = [Component, Component1]

const install = function(Vue) {
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

console.log('src/main.js')

export default {
  version: '0.0.1',
  install,
  Component,
  Component1
}
