import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import info from './info.js'
import category from './category.js'
import record from './record.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		error: null
  },
  mutations: {
		// общая шина обработки ошибок
		setError(state, error) {
			state.error = error
		},
		clearError(state) {
			state.error = null
		}
	},
	actions: {
		async fetchCurrency() {
			// получаем доступ до env переменой VUE_APP_FIXER
			// для сокрытия данных лучше использовать такой подход
			// записывать через env переменныеz, а не само значение
			const key = process.env.VUE_APP_FIXER
			const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
			return await res.json()
		}
	},
	getters: {
		error: state => state.error
	},
  modules: {
		auth,
		info,
		category,
		record
	}
})
