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
	if (!isThereAtleastOneUnhealthyKidney()) {
		res.status(411).json({
			status: 411,
			message: 'All kidneys are healthy!',
		})
	}

	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true
	}

	res.json({
		message: 'Successfully replaced all the unhealthy kidney!',
	})
})

app.delete('/', (req, res) => {
	if (!isThereAtleastOneUnhealthyKidney()) {
		res.status(411).json({
			status: 411,
			message: 'All kidneys are healthy!',
		})
	}

	users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy)

	res.json({
		message: 'Successfully removed all the unhealthy kidney!',
	})
})

function isThereAtleastOneUnhealthyKidney() {
	let alleastOneUnhealthyKidney = false

	for (let i = 0; i < users[0].kidneys.length; i++) {
		if (!users[0].kidneys[i].healthy) {
			alleastOneUnhealthyKidney = true
			break
		}
	}

	return alleastOneUnhealthyKidney
}

app.listen(PORT, () => {
	console.log(`Server Started at port ${PORT}`)
})
