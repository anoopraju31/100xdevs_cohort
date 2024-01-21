const express = require('express')
const { updateSchema } = require('../helpers/validations')
const { User } = require('../db')
const { authMiddleware } = require('../middlewares/authMiddleware')
const {
	signUpController,
	signInController,
} = require('../controllers/userControllers')
require('dotenv').config()

const router = express.Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)

router.put('/', authMiddleware, async (req, res) => {
	const { success } = updateSchema.safeParse(req.body)

	if (!success)
		return res.status(411).json({ message: 'Error while updating information' })

	await User.updateOne({ _id: req.userId }, req.body)

	res.json({ message: 'Updated successfully' })
})

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
