const express = require('express')

const app = express()
const PORT = 5500

app.get('/ride', (req, res) => {
	res.json({ message: 'You have successfully riden the ride.' })
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
