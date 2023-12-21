const express = require('express')

const app = express()
const PORT = 5500

function isOldEnoughMiddleware(req, res, next) {
	const age = parseInt(req.query.age)

	if (age < 14)
		return res
			.status(400)
			.json({ message: 'Sorry, you are underaged for this ride.' })

	next()
}

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
	res.json({ message: 'You have successfully riden the ride1.' })
})

app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
	res.json({ message: 'You have successfully riden the ride2.' })
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
