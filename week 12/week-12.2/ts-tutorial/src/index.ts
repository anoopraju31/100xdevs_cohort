//  // interface
// interface User {
// 	name: string
// 	age: number
// }

// function sumOfAge(user1: User, user2: User) {
// 	return user1.age + user2.age
// }

// const age = sumOfAge({ name: 'Taro', age: 20 }, { name: 'Jiro', age: 30 })
// console.log(age)

// // pick
// interface User {
// 	id: string
// 	name: string
// 	age: number
// 	email: string
// 	password: string
// }

// type UserProfile = Pick<User, 'name' | 'email'>

// const displayUserProfile = (user: UserProfile) => {
// 	console.log(`Name: ${user.name}, Email: ${user.email}`)
// }

// const user1: User = {
// 	id: 'aq1wws3ed',
// 	name: 'Harkirat Singh',
// 	age: 30,
// 	email: 'harkirat@gmail.com',
// 	password: 'fjoitjpijgodmvompi',
// }

// displayUserProfile(user1)

// // Partial
// interface User {
// 	id: string
// 	name: string
// 	age: number
// 	email: string
// 	password: string
// }

// type UserProfile = Pick<User, 'name' | 'email'>
// type UserProfileUpdate = Partial<UserProfile>

// const updateUserProfile = (user: UserProfileUpdate) => {
// 	console.log(`Name: ${user.name}, Email: ${user.email}`)
// }

// updateUserProfile({})

// const user1: User = {
// 	id: 'aq1wws3ed',
// 	name: 'Harkirat Singh',
// 	age: 30,
// 	email: 'harkirat@gmail.com',
// 	password: 'fjoitjpijgodmvompi',
// }

// // readonly
// interface User {
// 	readonly name: string
// 	readonly age: number
// }

// const user: User = { name: 'Taro', age: 20 }

// user.name = 'Anoop' // Error: Cannot assign to 'name' because it is a read-only property.

// // Record
// type User = {
// 	id: string
// 	username: string
// }

// // type Users = {
// // 	[key: string]: User
// // }

// type Users = Record<string, User>

// const users: Users = {
// 	'ras@rtti': {
// 		id: 'ras@rtti',
// 		username: 'anoop',
// 	},
// 	'ras@harki': {
// 		id: 'ras@harki',
// 		username: 'harkirat',
// 	},
// }

// console.log(users['ras@rtti'])

// Map
type User = {
	id: string
	username: string
}

const users = new Map<string, User>()

users.set('ras@rtti', { id: 'ras@rtti', username: 'anoop' })
users.set('ras@harki', { id: 'ras@harki', username: 'harkirat' })

const user = users.get('ras@rtti')
console.log(user)
