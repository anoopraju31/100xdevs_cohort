const express = require('express')
const mainRoutes = require('./routes/index')
const app = express()
const PORT = 5500

app.use('/api/v1', mainRoutes)

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
