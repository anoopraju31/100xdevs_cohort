let db = new Date()

setTimeout(() => {
	let di = new Date()
	console.log(di.getTime() - db.getTime() - 1000)
}, 1000)
