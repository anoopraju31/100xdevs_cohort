const express = require('express')

const app = express()
const PORT = 5500

app.get('/', (req, res) => {
	res.json({
		status: 200,
		message: 'Welcome to my server!',
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
