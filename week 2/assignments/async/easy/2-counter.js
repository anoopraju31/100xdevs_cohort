let startDate = new Date()
let previousDate = startDate

while (true) {
	let currentDate = new Date()

	if (currentDate.getTime() > previousDate.getTime() + 1000) {
		let hours = currentDate.getHours() - startDate.getHours()
		let minutes = currentDate.getMinutes() - startDate.getMinutes()
		let seconds = currentDate.getSeconds() - startDate.getSeconds()

		console.log(hours + ' : ' + minutes + ' : ' + seconds)
		previousDate = currentDate
	}
}
