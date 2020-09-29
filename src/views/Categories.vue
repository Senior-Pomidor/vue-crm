<template>
	<div>
		<div class="page-title">
			<h3>Категории</h3>
		</div>
		<section>
			<Loader v-if="loading" />
			<div v-else class="row">
				<CategoryCreate @created="addNewCategory" />

				<CategoryEdit
					:categories="categories"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate.vue'
import CategoryEdit from '@/components/CategoryEdit.vue'

export default {
	name: 'categories',
	components: {
		CategoryCreate,
		CategoryEdit
	},
	data: () => ({
		categories: [],
		loading: true
	}),
	async mounted() {
		this.categories = await this.$store.dispatch('fetchCategories')
		// console.log(this.categories)
		this.loading = false
	},
	methods: {
		addNewCategory(category) {
			this.categories.push(category)
			// console.log(this.categories)
		}
	}
}
</script>
