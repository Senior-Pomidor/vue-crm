import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import currencyFilter from '@/filters/currency.filter.js'
import messagePlugin from '@/utils/message.plugin.js'
import Loader from '@/components/app/Loader.vue'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

// импорт объекта firebase
import firebase from 'firebase/app'
// импорт модулей авторизации и базы данных
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

// глобальная регистрация плагинов
Vue.use(messagePlugin)
Vue.use(Vuelidate)
// глобальная регистрация фильтра dateFilter
// с присвоением имени date
Vue.filter('date', dateFilter)
// глобальная регистрация фильтра currencyFilter
// с присвоением имени currency
Vue.filter('currency', currencyFilter)
// глобальная регистрация лоадера
Vue.component('Loader', Loader)

// инициализация firebase
firebase.initializeApp({
	apiKey: "AIzaSyA_jXWqM3cAnH3GJZ2Kna3gK_5zZJVkE2Q",
	authDomain: "vue-crm-3f79d.firebaseapp.com",
	databaseURL: "https://vue-crm-3f79d.firebaseio.com",
	projectId: "vue-crm-3f79d",
	storageBucket: "vue-crm-3f79d.appspot.com",
	messagingSenderId: "106616315260",
	appId: "1:106616315260:web:eed333962d438db58798f9",
	measurementId: "G-7YEQFYGQP6"
})

let app

// вызывается если есть локальные данные для автоматической авторизации
firebase.auth().onAuthStateChanged(() => {
	// коллбэк который выполняется тольо при срабатывании функции
	// в данном случае инициализируется приложение vue
	if(!app) {
		// проверка чтобы не создавалось новое приложение при каждом срабатывании функции
			app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})


