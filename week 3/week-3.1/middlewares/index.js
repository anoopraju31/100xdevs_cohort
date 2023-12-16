const express = require('express')

const app = express()
const PORT = 5500
let numberOfRequests = 0
// * app.use() middleware will be applicable to all the routes that comes after the middlware
app.use(express.json())

function userMiddleware(req, res, next) {
	const username = req.headers.username
	const password = req.headers.password

	if (username != 'harkirat' || password != 'pass')
		return res.status(400).json({ msg: 'Somethings up with your inputs' })

	next()
}

function kidneyCheck(req, res, next) {
	const kidneyId = req.query.kidneyId

	if (kidneyId != 1 && kidneyId != 2)
		return res.status(400).json({ msg: 'Somethings up with your inputs' })

	next()
}

function calculateNumberOfRequests(req, res, next) {
	numberOfRequests++
	next()
}

app.use(calculateNumberOfRequests)

app.get('/health-checkup', userMiddleware, kidneyCheck, function (req, res) {
	res.json({
		msg: 'Your kidney is fine!',
	})
})

// Global Catches
app.use((err, req, res, next) => {
	res.json({
		message: 'Sorry, something is up with our server.',
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
