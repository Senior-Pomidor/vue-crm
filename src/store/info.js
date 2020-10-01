import firebase from 'firebase/app'

export default {
	state: {
		info: {}
	},
	mutations: {
		setInfo(state, info) {
			state.info = info
		},
		clearInfo(state) {
			state.info = {}
			// чтобы не кешировать что-л в стейте при логауте
		}
	},
	actions: {
		async fetchInfo({dispatch, commit}) {
			try {
				const uid = await dispatch('getUid')
				const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
				commit('setInfo', info)
			} catch (err) {
				commit('setError', err)
				throw err
			}
		},
		async updateInfo({dispatch, commit}, toUpdate) {
			try {
				const uid = await dispatch('getUid')
				const updateData = {...this.getters.info, ...toUpdate}
				await firebase.database().ref(`/users/${uid}/info`).update(updateData)
				commit('setInfo', updateData)
			} catch (err) {
				commit('setError', err)
				throw err
			}
		}
	},
	getters: {
		info: state => state.info
	}
}
