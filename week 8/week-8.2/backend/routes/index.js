const express = require('express')
const userRoutes = require('./userRoutes')

const router = express.Router()

router.use('/user', userRoutes)

module.exports = router
