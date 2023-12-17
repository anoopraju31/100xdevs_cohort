const express = require('express')

const app = express()
const PORT = 5500

const timeTakenToHandleRequests = []

function requestTimeMiddleware(req, res, next) {
	const startTime = Date.now()

	res.on('finish', () => {
		const endTime = Date.now()
		const duration = endTime - startTime

		console.log(duration)

		timeTakenToHandleRequests.push(duration)
	})

	next()
}

app.use(requestTimeMiddleware)

app.get('/', (req, res) => {
	res.json({
		message: "Welcome to Anoop's Server.",
	})
})

app.get('/average-time-to-handle-requests', (req, res) => {
	const totalTimeTaken = timeTakenToHandleRequests.reduce(
		(acc, val) => acc + val,
		0,
	)
	const numberOfRequests = timeTakenToHandleRequests.length
	const averageTimeTakenToHandleRequests = totalTimeTaken / numberOfRequests

	res.json({
		numberOfRequests,
		averageTimeTakenToHandleRequests: `${averageTimeTakenToHandleRequests} ms`,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
