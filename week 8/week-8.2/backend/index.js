const express = require('express')
const mainRoutes = require('./routes/index')
const cors = require('cors')
const app = express()
const PORT = 5500

app.use(cors())
app.use(express.json())
app.use('/api/v1', mainRoutes)

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
