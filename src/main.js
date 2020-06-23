import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

// глобальная регистрация фильтра dateFilter
// с присвоением имени date
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
