const { Router } = require('express')
const { authMiddleware } = require('../middlewares/auth.middlewares')
const {
	balanceController,
	transferController,
} = require('../controllers/account.controllers')

const router = Router()

router.get('/balance', authMiddleware, balanceController)
router.post('/transfer', authMiddleware, transferController)
module.exports = router
