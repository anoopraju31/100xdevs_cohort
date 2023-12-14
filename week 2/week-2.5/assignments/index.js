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

app.use(express.json())

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

app.post('/', (req, res) => {
	const { isHealthy } = req.body

	users[0].kidneys.push({
		healthy: isHealthy,
	})

	res.json({
		message: 'Successfully added new kidney!',
	})
})

app.put('/', (req, res) => {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true
	}

	res.json({
		message: 'Successfully replaced all the unhealthy kidney!',
	})
})

app.listen(PORT, () => {
	console.log(`Server Started at port ${PORT}`)
})
