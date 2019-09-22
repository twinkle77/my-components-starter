import Component1 from './src/main'

// 组件单独提供install方法，支持按需引入
Component1.install = function(Vue) {
  Vue.component(Component1.name, Component1)
}

console.log('com1')

export default Component1
