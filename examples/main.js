import Vue from 'vue'
import App from './App.vue'

import Jdm from '../src/main.js'

Vue.use(Jdm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
