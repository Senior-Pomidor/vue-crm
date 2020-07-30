<template>
	<div id="app">
		<!-- общий компонент. в зав-ти от условия :is="" вместо него будет стоять дргуой компонент -->
		<component :is="layout">
			<router-view />
		</component>
	</div>
</template>

<script>
	import EmptyLayout from '@/layouts/EmptyLayout.vue'
	import MainLayout from '@/layouts/MainLayout.vue'
	export default {
		components: {
			EmptyLayout,
			MainLayout
		},
		computed: {
			layout() {
				//возвращает название нужного компонента лэйаута
				return (this.$route.meta.layout || 'empty') + '-layout'
			}
		}
	}
</script>

<style lang="scss">
	// ~ подключает из папки node_modules
	@import '~materialize-css/dist/css/materialize.min.css';
	@import 'assets/index.css';
</style>
