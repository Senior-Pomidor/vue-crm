import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import messagePlugin from '@/utils/message.plugin.js'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

// глобальная регистрация плагинов
Vue.use(messagePlugin)
Vue.use(Vuelidate)
// глобальная регистрация фильтра dateFilter
// с присвоением имени date
Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
