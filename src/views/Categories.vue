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
					v-if="categories.length"
					:categories="categories"
					:key="categories.length + updateCount"
					
					@updated="updateCategories"
				/>
				<!-- :key - форсированная перерисовка компонента при изменении значенияя key -->
				<p v-else class="center">Категорий пока нет</p>
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
		loading: true,
		updateCount: 0
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
		},
		updateCategories(category) {
			const index = this.categories.findIndex(cat => cat.id === category.id)
			this.categories[index].title = category.title
			this.categories[index].limit = category.limit
			this.updateCount++
		}
	}
}
</script>
