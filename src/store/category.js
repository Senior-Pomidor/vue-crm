import firebase from 'firebase/app'

export default {
	actions: {
		async fetchCategories({commit, dispatch}) {
			try {
				const uid = await dispatch('getUid')
				const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
				
				// console.log(categories)

				// const cats = []

				// Object.keys(categories).forEach(key => {
				// 	cats.push({
				// 		title: categories[key].title,
				// 		limit: categories[key].limit,
				// 		id: key
				// 	})
				// })

				// return cats

				return Object.keys(categories).map(key => ({...categories[key], id: key}))
			} catch(err) {
				commit('setError', err)
				throw err
			}
		},
		async updateCategory({commit, dispatch}, {title, limit, id}) {
			try {
				const uid = await dispatch('getUid')
				await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, limit})
			} catch(err) {
				commit('setError', err)
				throw err
			}
		},
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
