setInterval(() => {
	let nd = new Date()
	let hours = nd.getHours()
	let minutes = nd.getMinutes()
	let seconds = nd.getSeconds()

	console.log(hours + ' : ' + minutes + ' : ' + seconds)
}, 1000)
