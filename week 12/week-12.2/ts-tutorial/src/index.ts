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

// Partial
interface User {
	id: string
	name: string
	age: number
	email: string
	password: string
}

type UserProfile = Pick<User, 'name' | 'email'>
type UserProfileUpdate = Partial<UserProfile>

const updateUserProfile = (user: UserProfileUpdate) => {
	console.log(`Name: ${user.name}, Email: ${user.email}`)
}

updateUserProfile({})

const user1: User = {
	id: 'aq1wws3ed',
	name: 'Harkirat Singh',
	age: 30,
	email: 'harkirat@gmail.com',
	password: 'fjoitjpijgodmvompi',
}
