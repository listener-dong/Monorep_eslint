import Vue from 'vue'
import App from './App.vue'

import 'ql-styles/reset.scss'
import 'ql-styles/tailwind.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import './style/tailwind.css'

Vue.use(ElementUI)
// let abc = 'abc'
// console.log(abc)

new Vue({
  render: h => h(App)
}).$mount('#app')
