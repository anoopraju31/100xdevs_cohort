const express = require('express')
const { User } = require('../db')
const { authMiddleware } = require('../middlewares/authMiddleware')
const {
	signUpController,
	signInController,
	updateController,
} = require('../controllers/userControllers')

const router = express.Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)
router.put('/', authMiddleware, updateController)

router.get('/bulk', authMiddleware, async (req, res) => {
	const filter = req.query.filter || ''
	const filteredUsers = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	})

	const users = filteredUsers.map(({ username, firstName, lastName, _id }) => ({
		username,
		firstName,
		lastName,
		_id,
	}))

	res.json({ users })
})

module.exports = router
