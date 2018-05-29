import Vue from 'vue'
import store from './vuex/index'
import App from './components/App'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  ...App,
  store
})

// const app = new Vue({
//   router,
//   ...App
// }).$mount('#app')

export { app, router, store }
