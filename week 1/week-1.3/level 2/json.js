const user = {
	name: 'Anoop',
	age: 23,
	gender: 'male',
}

console.log(user)

const stringifiedUser = JSON.stringify(user)
const parsedUser = JSON.parse(stringifiedUser)

console.log(parsedUser)
