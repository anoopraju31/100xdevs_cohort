const express = require('express')
const zod = require('zod')

const app = express()
const PORT = 5500
const schema = zod.array(zod.number())

app.use(express.json())

function validateCredentials(credentials) {
	const { email, password } = credentials
	const credentialSchema = zod.object({
		email: zod.string().email(),
		password: zod.string().min(8),
	})

	const res = credentialSchema.safeParse({ email, password })

	return res
}

app.post('/login', (req, res) => {
	const { email, password } = req.body
	const validationResponse = validateCredentials({ email, password })

	if (!validationResponse.success)
		return res.status(400).json({
			message: 'Invalid Credentials',
		})

	res.status(200).json({
		message: 'successfully logged in',
	})
})

app.post('/health-checkup', function (req, res) {
	// kidneys = [1, 2]
	const kidneys = req.body.kidneys
	const response = schema.safeParse(kidneys)

	if (!response.success) {
		res.status(411).json({
			msg: 'input is invalid',
		})
	}

	res.send({ response })
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
