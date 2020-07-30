<template>
	<ul class="sidenav app-sidenav" :class="{open: value}">
		<router-link tag="li" active-class="active" :to="link.url"
			v-for="link in links" :key="link.url" :exact="link.exact"
		>
			<a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
		</router-link>
	</ul>
</template>

<script>
export default {
	// будет соотв-ть значению v-model из MainLayout
	props: ['value'],
	data: () => ({
		links: [
			{title: 'Счет', url: '/', exact :true},
			{title: 'История', url: '/history'},
			{title: 'Планирование', url: '/planning'},
			{title: 'Новая запись', url: '/record'},
			{title: 'Категории', url: '/categories'}
		]
	})
}
</script>
