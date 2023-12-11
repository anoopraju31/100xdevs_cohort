const fs = require('fs')

function AnoopFileRead() {
	return new Promise(function (resolve) {
		fs.readFile('a.txt', 'utf-8', function (error, data) {
			resolve(data)
		})
	})
}

function onDone(data) {
	console.log(data)
}

AnoopFileRead().then(onDone)
