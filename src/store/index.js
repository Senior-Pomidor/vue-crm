import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'

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
	getters: {
		error: state => state.error
	},
  actions: {
  },
  modules: {
		auth
  }
})
