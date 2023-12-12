const fs = require('fs')

const dummyData =
	'In Node.js, the fs module, which stands for "file system," provides an API for interacting with the file system. This module allows you to perform various file-related operations, such as reading from or writing to files, creating directories, and more.'

fs.writeFile('a.txt', dummyData, 'utf-8', function (error) {
	if (error) {
		console.error(error.message)
		return
	}

	console.log('File written successfully!')

	fs.readFile('a.txt', 'utf-8', function (error, data) {
		if (error) {
			console.error(error.message)
			return
		}

		console.log(data)
	})
})
