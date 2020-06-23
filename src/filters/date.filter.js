export default function dateFilter(value, format = 'date') {
	// console.log(value)
	const options = {}
	// опции заносятся в объект в зависимости от условия format

	// добавление опций для даты
	if(format.includes('date')) {
		options.day = '2-digit',
		options.month = 'long',
		options.year = 'numeric'
	}

	// добавление опций для времени
	if(format.includes('time')) {
		options.hour = '2-digit',
		options.minute = '2-digit',
		options.second = '2-digit'
	}
	// Intl глобальный класс для даты и времени
	return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
