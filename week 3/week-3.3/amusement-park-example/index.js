const express = require('express')

const app = express()
const PORT = 5500

// * function that returns a boolean if the age of the person is more than 14.
function isOldEnough(age) {
	return age >= 14
}

app.get('/ride1', (req, res) => {
	const age = parseInt(req.query.age)

	if (isOldEnough(age))
		return res.json({ message: 'You have successfully riden the ride1.' })
	else return res.json({ message: 'Sorry, you are underaged for this ride1.' })
})

app.get('/ride2', (req, res) => {
	const age = parseInt(req.query.age)

	if (isOldEnough(age))
		return res.json({ message: 'You have successfully riden the ride2.' })
	else return res.json({ message: 'Sorry, you are underaged for this ride2.' })
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
