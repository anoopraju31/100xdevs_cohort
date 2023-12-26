const express = require('express')

const app = express()
const PORT = 3000

app.get('/add', (req, res) => {
	const a = parseInt(req.query.a)
	const b = parseInt(req.query.b)

	const sum = a + b

	res.json({
		result: sum,
	})

	// res.send(sum)
})

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}`)
})
