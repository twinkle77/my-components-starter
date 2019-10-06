// This file is auto gererated by build/buildEntry.js
import Component from '../packages/component'
import Component1 from '../packages/component1'

import locale from '@/locale'

const components = [Component, Component1]

const install = function(Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.1.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Component,
  Component1
}
