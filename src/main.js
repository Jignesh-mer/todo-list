import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'
import store from './store'

import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);


Vue.config.productionTip = false

// Add the required rule

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
