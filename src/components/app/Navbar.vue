<template>
	<nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<div class="navbar-left">
				<!-- передаёт событие с нназванием click -->
				<!-- в данном слуае обработка будет в MainLayout -->
				<a href="#" @click.prevent="$emit('click')">
					<i class="material-icons black-text">dehaze</i>
				</a>
				<span class="black-text">12.12.12</span>
			</div>

			<ul class="right hide-on-small-and-down">
				<li>
					<a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
						USER NAME
						<i class="material-icons right">arrow_drop_down</i>
					</a>

					<ul id='dropdown' class='dropdown-content'>
						<li>
							<router-link to="/profile" class="black-text">
								<i class="material-icons">account_circle</i>Профиль
							</router-link>
						</li>
						<li class="divider" tabindex="-1"></li>
						<li>
							<a href="#" class="black-text" @click.prevent="logout">
								<i class="material-icons">assignment_return</i>Выйти
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	methods: {
		logout() {
			console.log('logout')
			this.$router.push('/login?message=logout')
		}
	},
	mounted() {
		M.Dropdown.init(this.$refs.dropdown, {
			constrainWidth: false
		})
	}
}
</script>
