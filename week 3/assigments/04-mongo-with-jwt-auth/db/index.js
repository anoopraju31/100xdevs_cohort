const mongoose = require('mongoose')
require('dotenv').config()

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_URL)

// Define schemas
const AdminSchema = new mongoose.Schema({
	username: String,
	password: String,
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
})

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
})

const CourseSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	imageLink: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
	Admin,
	User,
	Course,
}
