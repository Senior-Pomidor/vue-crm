import firebase from 'firebase/app'

export default {
	actions: {
		async createRecord({dispatch, commit}, record) {
			try {
				const uid = await dispatch('getUid')
				return await firebase.database().ref(`/users/${uid}/records`).push(record)
			} catch(err) {
				commit('setError', err)
				throw err
			}
		}
	}
}
