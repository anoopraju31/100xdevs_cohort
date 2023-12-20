const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const { adminExists } = require('../utills')
const { Admin } = require('../db')
require('dotenv').config()

const router = Router()
const secret = process.env.JWT_SECRET
const credentialSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
})

// Admin Routes
router.post('/signup', async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	try {
		const isAdminExists = await adminExists(username)

		if (isAdminExists)
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

router.post('/signin', async (req, res) => {
	try {
		const username = req.body.username
		const password = req.body.password

		const admin = await adminExists(username)

		if (!admin)
			return res.status(400).json({
				message: 'username does not exists',
			})

		if (admin.password !== password)
			return res.status(400).json({ message: 'Invalid Password' })

		const token = jwt.sign({ username }, secret)

		res.json({
			messsage: 'user login successfully',
			token,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

// router.post('/courses', adminMiddleware, (req, res) => {
// 	// Implement course creation logic
// })

router.get('/courses', adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
	res.json({ message: 'ok' })
})

module.exports = router
