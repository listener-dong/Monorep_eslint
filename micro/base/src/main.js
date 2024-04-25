import Vue from 'vue'
import App from './App.vue'

import 'ql-styles/reset.scss'
import 'ql-styles/tailwind.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'virtual:svg-icons-register' // 支持 svg
import 'ql-styles/index.scss'

import microApp from '@micro-zoe/micro-app'

// 微前端-运行
microApp.start()

Vue.use(ElementUI)
// let abc = 'abc'
// console.log(abc)

new Vue({
  render: h => h(App)
}).$mount('#app')
