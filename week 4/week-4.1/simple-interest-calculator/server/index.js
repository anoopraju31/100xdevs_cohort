const express = require('express')
const app = express()
const PORT = 4000

app.get('/simple-interest', (req, res) => {
	const amount = parseInt(req.query.amount)
	const term = parseInt(req.query.term)
	const rate = parseInt(req.query.rate)

	const simpleInterest = (amount * term * rate) / 100

	res.json({
		simpleInterest,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})
