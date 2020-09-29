import firebase from 'firebase/app'

export default {
	actions: {
		async login({dispatch, commit}, {email, password}) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch(err) {
				commit('setError', err)
				throw err
			}
		},
		async register({dispatch, commit}, {email, password, name}) {
			try {
				await firebase.auth().createUserWithEmailAndPassword(email, password)
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/info`).set({
					bill: 10000,
					name
				})
			} catch(err) {
				console.log('eee', err)
				commit('setError', err)
				throw err
			}
		},
		getUid() {
			const user = firebase.auth().currentUser
			return user ? user.uid : null
		},
		async logout({commit}) {
			await firebase.auth().signOut()
			commit('clearInfo')
		}
	}
}
