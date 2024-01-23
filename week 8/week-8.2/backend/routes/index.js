const { Router } = require('express')
const userRouter = require('./user.routes')
const accountRouter = require('./account.routes')

const router = Router()

router.use('/user', userRouter)
router.use('/account', accountRouter)

module.exports = router
