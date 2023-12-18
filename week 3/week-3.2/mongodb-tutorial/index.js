const express = require('express')

const app = express()
const PORT = 5500

app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		message: "Anoop's server started!",
	})
})

app.post('/signup', (req, res) => {
	const username = req.body.username
	const password = req.body.password

	res.json({
		username,
		password,
	})
})

app.post('/signin', (req, res) => {
	const username = req.body.username
	const password = req.body.password

	res.json({
		username,
		password,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
