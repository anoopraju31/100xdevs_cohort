const d = new Date()

setInterval(() => {
	let nd = new Date()
	let hours = nd.getHours() - d.getHours()
	let minutes = nd.getMinutes() - d.getMinutes()
	let seconds = nd.getSeconds() - d.getSeconds()

	console.log(hours + ' : ' + minutes + ' : ' + seconds)
}, 1000)
