<template>
	<nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<div class="navbar-left">
				<!-- передаёт событие с нназванием click -->
				<!-- в данном слуае обработка будет в MainLayout -->
				<a href="#" @click.prevent="$emit('click')">
					<i class="material-icons black-text">dehaze</i>
				</a>
				<!-- выводим дату с фильтром date -->
				<!-- в date передаётся доп параметр datetime (параметр format в фильтре) -->
				<span class="black-text">{{date | date('datetime')}}</span>
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
	data: () => ({
		date: new Date,
		interval: null,
		dropdown: null
	}),
	methods: {
		logout() {
			// выход из приложения
			console.log('logout')
			// кверипараметр для дальнейшего отображения сообщения
			this.$router.push('/login?message=logout')
		}
	},
	mounted() {
		// не выводим напрямую, а присваеваем в переменную чтобы избавиться от утечки памяти
		this.interval = setInterval(() => {
			// обновление времени каждую секунду
			this.date = new Date
		}, 1000),
		this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
			// инициализация дропдауна
			constrainWidth: false
		})
	},
	beforeDestroy() {
		clearInterval(this.interval)
		// если плагин не успел инициализироваться,
		// а мы попытааемся вызвать метод destroy,
		// может возникнуть ошибка
		// добавим проверку для избежания ошибок
		if(this.dropdown && this.dropdown.destroy) {
			this.dropdown.destroy()
		}
	}
}
</script>
