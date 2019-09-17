import Component from './src/main'

// 组件单独提供install方法，支持按需引入
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
