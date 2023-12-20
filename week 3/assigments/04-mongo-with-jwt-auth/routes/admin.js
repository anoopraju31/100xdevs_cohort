const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const zod = require('zod')
const { adminExists } = require('../utills')
const { Admin } = require('../db')

const router = Router()
const credentialSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
})

// Admin Routes
router.post('/signup', async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	try {
		const isAdminExisits = await adminExists(username)

		if (isAdminExisits)
			return res.status(400).json({
				message: 'username already exists',
			})

		const isValidCredentials = credentialSchema.safeParse({
			username,
			password,
		})

		if (!isValidCredentials)
			return res.status(400).json({
				message: 'Invalid Credentials',
			})

		const admin = new Admin({
			username,
			password,
		})

		await admin.save()

		res.json({ message: 'Admin created successfully' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

// router.post('/signin', async (req, res) => {})

// router.post('/courses', adminMiddleware, (req, res) => {
// 	// Implement course creation logic
// })

// router.get('/courses', adminMiddleware, (req, res) => {
// 	// Implement fetching all courses logic
// })

module.exports = router
