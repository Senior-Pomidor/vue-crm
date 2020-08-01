// плагин для удобного использования сообщений toasts из materialize
export default {
	install(Vue, options) {
		// $ означает приватную (системную) переменную
		Vue.prototype.$message = function(text) {
			M.toast({html: text})
		}

		Vue.prototype.$error = function(html) {
			M.toast({html: `[Ошибка]: ${html}`})
		}
	}
}
