const express = require('express')

const app = express()
const PORT = 5500

function sum(n) {
	let ans = 0

	for (let i = 0; i <= n; i++) ans += i

	return ans
}

app.get('/', (req, res) => {
	const { n } = req.query
	let value = sum(n ? n : 10000)
	res.json({
		status: 200,
		message: 'Welcome to my server!',
		number: n,
		sum: value,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
