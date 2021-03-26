import Vue from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
// service worker for caching not needed for now
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

axios.defaults.baseURL = process.env.VUE_APP_BASEURL
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
