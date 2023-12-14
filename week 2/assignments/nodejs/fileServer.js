/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express')
const fs = require('fs/promises')
const path = require('path')
const app = express()

async function getFileNames() {
	try {
		const files = await fs.readdir(path.join(__dirname, './files/'))
		return files
	} catch (error) {
		console.error(error.message)
		throw new Error('Unable to read files directory')
	}
}

async function getFileContents(filename) {
	try {
		const data = await fs.readFile(`files/${filename}`, 'utf-8')

		return data
	} catch (error) {
		console.error(error.message)
		throw new Error('Unable to read the file')
	}
}

app.get('/files', async (req, res) => {
	// try {
	// 	const files = await getFileNames()

	// 	res.json(files)
	// } catch (error) {
	// 	res.status(500).json({ error: 'Failed to retrieve files' })
	// }

	try {
		const files = await fs.promises.readdir(path.join(__dirname, './files/'))
		res.json(files)
	} catch (error) {
		console.error(error.message)
		return res.status(500).json({ error: 'Failed to retrieve files' })
	}
})

app.get('/file/:filename', async (req, res) => {
	try {
		const files = await getFileNames()
		const filename = req.params.filename
		const idx = files.indexOf(filename)

		if (idx === -1) return res.status(404).send('File not found')

		const data = await getFileContents(filename)

		res.send(data)
	} catch (error) {
		res.sendStatus(500)
	}
})

app.use((req, res) => {
	res.status(404).send('Route not found')
})

module.exports = app
