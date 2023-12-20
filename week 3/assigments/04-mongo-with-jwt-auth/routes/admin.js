const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const { adminExists } = require('../utills')
const { Admin, Course } = require('../db')
require('dotenv').config()

const router = Router()
const secret = process.env.JWT_SECRET
const credentialSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
})
const CourseSchema = zod.object({
	title: zod.string().min(4),
	description: zod.string().min(4),
	price: zod.number().nonnegative().finite(),
	imageLink: zod.string().url(),
})

// Admin Routes
router.post('/signup', async (req, res) => {
	try {
		const username = req.body.username
		const password = req.body.password
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
		const isValidCredentials = credentialSchema.safeParse({
			username,
			password,
		})

		if (!isValidCredentials)
			return res.status(400).json({
				message: 'Invalid Credentials',
			})

		const admin = await adminExists(username)

		if (!admin)
			return res.status(400).json({
				message: 'username does not exists',
			})

		if (admin.password !== password)
			return res.status(400).json({ message: 'Invalid Password' })

		const token = jwt.sign({ username, id: admin._id }, secret)

		res.json({
			messsage: 'user login successfully',
			token,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.post('/courses', adminMiddleware, async (req, res) => {
	try {
		const { title, description, price, imageLink } = req.body
		const author = req.headers['admin-id']
		const isValidCourseDetails = CourseSchema.safeParse({
			title,
			description,
			price,
			imageLink,
		})

		if (!isValidCourseDetails)
			return res.status(400).json({
				message: 'Invalid Credentials',
			})

		const admin = await Admin.findById(author)
		const course = new Course({
			title,
			description,
			price,
			imageLink,
			author,
		})

		const newCourse = await course.save()

		admin.courses.push(newCourse._id)
		await admin.save()

		res.json({
			message: 'Course created successfully',
			courseId: newCourse._id,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.get('/courses', adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
	const author = req.headers['admin-id']
	res.json({ message: 'ok', author })
})

module.exports = router
