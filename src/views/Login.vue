<template>
	<form class="card auth-card" @submit.prevent="submitHandler">
		<div class="card-content">
			<span class="card-title">Домашняя бухгалтерия</span>
			<div class="input-field">
				<input id="email" type="text" class="validate"
					v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
					<!-- .trim для удаления лишних пробелов -->
					<!-- $v.email.$dirty для проверки что в данное поле уже совершался ввод -->
				<label for="email">Email</label>
				<small class="helper-text invalid" v-if="($v.email.$dirty && !$v.email.required)">Поле Email не должно быть пустым</small>
				<small class="helper-text invalid" v-else-if="($v.email.$dirty && !$v.email.email)">Введите корретный Email</small>
			</div>
			<div class="input-field">
				<input id="password" type="password" class="validate"
				v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
				<label for="password">Пароль</label>
				<small class="helper-text invalid" v-if="($v.password.$dirty && !$v.password.required)">Введите пароль</small>
				<small class="helper-text invalid" v-else-if="($v.password.$dirty && !$v.password.minLength)">
					Пароль должен сожержать не менее {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}
				</small>
			</div>
		</div>
		<div class="card-action">
			<div>
				<button class="btn waves-effect waves-light auth-submit" type="submit">
					Войти
					<i class="material-icons right">send</i>
				</button>
			</div>

			<p class="center">
				Нет аккаунта?
				<router-link to="/register">Зарегистрироваться</router-link>
			</p>
		</div>
	</form>
</template>

<script>
// импорт валидаторов из библиотеки vuelidate
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
	name: 'login', //название данной страницы
	data: () => ({
		// модели для логина и пароля
		email: '',
		password: ''
	}),
	validations: {
		// обработка моделей с соответствующими названиями
		// в объект добавляются импортированные правила
		// которые должны быть применены к соответствующим моделям
		email: {email, required},
		password: {required, minLength: minLength(6)}
	},
	methods: {
		submitHandler() {
			// console.log(this.$v)
			// проверка на невалидность формы
			if (this.$v.$invalid) {
				// вызов валидации
				this.$v.$touch()
				return
			}
			// данные для бэкенда
			const formData = {
				emal: this.password,
				password: this.password
			}

			console.log(formData)
			this.$router.push('/')
		}
	}
}
</script>
