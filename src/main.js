// This file is auto gererated by build/buildEntry.js
import Component from '../packages/component'
import Component1 from '../packages/component1'

const components = [Component, Component1]

const install = function(Vue) {
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  install,
  Component,
  Component1
}
