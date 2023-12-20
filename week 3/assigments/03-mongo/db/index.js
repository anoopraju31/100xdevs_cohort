const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_URL)

// Define schemas
const AdminSchema = new mongoose.Schema({
	username: String,
	password: String,
})

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
})

const CourseSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	imageLink: String,
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
	Admin,
	User,
	Course,
}
