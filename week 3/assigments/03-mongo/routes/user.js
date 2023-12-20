const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { userExists } = require('../utills')
const { User, Course } = require('../db')

// User Routes
router.post('/signup', async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	try {
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

router.get('/courses', async (req, res) => {
	try {
		const courses = await Course.find()

		res.json(courses)
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
	const courseId = req.params.courseId
	const userId = req.headers['user-id']

	try {
		const course = await Course.findById(courseId)

		if (!course)
			return res.status(404).json({
				message: 'course not found',
			})

		const user = await User.findById(userId)

		const userCourse = user.courses.find((course) => course == courseId)

		if (userCourse)
			return res
				.status(400)
				.json({ message: 'You have already purchased to course' })

		user.courses.push(course._id)

		await user.save()

		res.json({ message: 'Course purchased successfully' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
	const userId = req.headers['user-id']

	try {
		const courses = await User.findById(userId).populate('courses').exec()

		if (!courses)
			return res.json({ message: "Sorry, you don't have any course" })

		res.json(courses.courses)
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

module.exports = router
