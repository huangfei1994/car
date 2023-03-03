import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'Assets/style/index.less'
import './utils/flexible'
import FastClick from 'fastclick'
import { Button, Progress } from 'vant'
Vue.use(Button)
Vue.use(Progress)
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
