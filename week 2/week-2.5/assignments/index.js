const express = require('express')

const app = express()
const PORT = 5500

const users = [
	{
		name: 'John Doe',
		kidneys: [
			{
				healthy: false,
			},
		],
	},
]

app.get('/', (req, res) => {
	const johnsKidneys = users[0].kidneys
	const numberOfKidneys = johnsKidneys.length
	let numberOfHealthyKidneys = 0

	for (let i = 0; i < numberOfKidneys; i++) {
		if (johnsKidneys[i].healthy) {
			numberOfHealthyKidneys += 1
		}
	}

	const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys

	res.json({
		numberOfKidneys,
		numberOfHealthyKidneys,
		numberOfUnHealthyKidneys,
	})
})

app.listen(PORT, () => {
	console.log(`Server Started at port ${PORT}`)
})
