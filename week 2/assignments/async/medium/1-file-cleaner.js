const fs = require('fs')

fs.readFile('a.txt', 'utf-8', (error, data) => {
	if (error) {
		console.error(error.message)
		return
	}

	console.log(data)

	const words = data.split(' ').filter((word) => word !== '')
	console.log(words)

	let cleanedUpData = words.join(' ')
	console.log(cleanedUpData)

	fs.writeFile('a.txt', cleanedUpData, 'utf-8', (error) => {
		if (error) {
			console.error(error.message)
			return
		}
	})
})
