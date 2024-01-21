const express = require('express')
const app = express()
const PORT = 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to PayTM clone' })
})

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
