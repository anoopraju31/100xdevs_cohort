const fs = require('fs')

function AnoopFileRead() {
	console.log('Inside AnoopFileRead')
	return new Promise(function (resolve, reject) {
		console.log('Inside Promise')
		fs.readFile('a.txt', 'utf-8', function (error, data) {
			if (error) {
				console.log('error')
				reject(error)
			}
			console.log('Before Resolve')
			resolve(data)
		})
	})
}

function onDone(data) {
	console.log(data)
}

// AnoopFileRead().then(onDone)

let a = AnoopFileRead()

console.log(a)

a.then(onDone)
