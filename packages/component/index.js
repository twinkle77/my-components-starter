import Component from './src/main'

// 组件单独提供install方法，支持按需引入
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

console.log('com0')

export default Component
