setInterval(() => {
	let d = new Date()
	let hrs = d.getHours()
	let mins = d.getMinutes()
	let secs = d.getSeconds()

	console.log(
		`${hrs < 10 ? '0' : ''}${hrs} : ${mins < 10 ? '0' : ''}${mins} : ${
			secs < 10 ? '0' : ''
		}${secs}`,
	)
}, 1000)
