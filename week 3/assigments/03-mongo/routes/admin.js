const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const { Admin, Course } = require('../db')
const { adminExists } = require('../utills')
const router = Router()

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

router.post('/courses', adminMiddleware, async (req, res) => {
	const { title, description, price, imageLink } = req.body
	const author = req.headers['admin-id']

	try {
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

router.get('/courses', adminMiddleware, async (req, res) => {
	const author = req.headers['admin-id']
	try {
		const admin = await Admin.findById(author).populate('courses').exec()

		res.json(admin.courses)
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

module.exports = router
