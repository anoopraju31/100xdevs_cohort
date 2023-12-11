const fs = require('fs')

fs.readFile('a.txt', 'utf-8', function (error, data) {
	if (error) console.error(error.message)
	else console.log(data)
})

console.log('Hi There!')

let a = 0

for (let i = 1; i < 1000000000; i++) {
	a++
}

console.log('Hi There 2')
