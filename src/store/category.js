import firebase from 'firebase/app'

export default {
	actions: {
		async createCategory({commit, dispatch}, {title, limit}) {
			try {
				const uid = await dispatch('getUid')
				const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit})
				return {title, limit, id: category.key}
			} catch(err) {
				commit('setError', err)
				throw err
			}
		}
	}
}
