const { Router } = require('express')
const zod = require('zod')
const userMiddleware = require('../middleware/user')
const { userExists } = require('../utills')
const { User } = require('../db')

const router = Router()
const credentialSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
})

// User Routes
router.post('/signup', async (req, res) => {
	try {
		const username = req.body.username
		const password = req.body.password
		const isValidCredentials = credentialSchema.safeParse({
			username,
			password,
		})

		if (!isValidCredentials)
			return res.status(400).json({
				message: 'Invalid Credentials',
			})

		const isUserExists = await userExists(username)

		if (isUserExists)
			return res.status(400).json({
				message: 'username does not exists',
			})

		const user = new User({
			username,
			password,
		})

		await user.save()

		res.json({ message: 'User created successfully' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

// app.post('/signin', (req, res) => {
// 	// Implement admin signup logic
// })

// app.get('/courses', (req, res) => {
// 	// Implement listing all courses logic
// })

// app.post('/courses/:courseId', userMiddleware, (req, res) => {
// 	// Implement course purchase logic
// })

// app.get('/purchasedCourses', userMiddleware, (req, res) => {
// 	// Implement fetching purchased courses logic
// })

module.exports = router
