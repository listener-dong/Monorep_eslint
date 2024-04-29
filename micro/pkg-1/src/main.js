import Vue from 'vue'
import App from './App.vue'

// 重置默认样式
import 'ql-styles/reset.scss'
// 引入 tailwind
import 'ql-styles/tailwind.css'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'virtual:svg-icons-register' // 支持 svg

let app = null

// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  Vue.use(ElementUI)
  app = new Vue({
    render: h => h(App)
  }).$mount('#pkg-1')
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}
