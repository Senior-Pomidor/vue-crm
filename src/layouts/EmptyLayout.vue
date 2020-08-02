<template>
<!-- лэйаут для страниц с логином и регистрацией -->
	<div class="grey darken-1 empty-layout">
		<router-view />
	</div>
</template>

<script>
import messages from '@/utils/messages.js'

export default {
	computed: {
		error() {
			return this.$store.getters.error
		}
	},
	watch: {
		error(fbError) {
			this.$error(messages[fbError.code] || 'Что-то пошло не так')
		}
	}
}
</script>
