const express = require('express')

const app = express()
const PORT = 5500
let numberOfRequests = 0

function countRequestsMiddleware(req, res, next) {
	numberOfRequests++
	next()
}

app.use(countRequestsMiddleware)

app.get('/', (req, res) => {
	res.json({
		message: "Welcome to Anoop's server.",
	})
})

app.get('/number-of-requests', (req, res) => {
	res.json({
		numberOfRequests,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
