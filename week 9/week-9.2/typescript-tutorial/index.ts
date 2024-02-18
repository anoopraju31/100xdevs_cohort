const x: number = 101

console.log(x)

//  functions
function greet(name: string) {
	console.log(`Welcome ${name}!`)
}

greet('Anoop')

function sum(num1: number, num2: number): number {
	return num1 + num2
}

console.log(sum(10, 24))

function runAfter1s(fn: () => void) {
	setTimeout(fn, 1000)
}

runAfter1s(function () {
	console.log('Hi there!')
})

interface User {
	firstName: string
	lastName: string
	age: number
	email?: string
}

const user = {
	firstName: 'harkirat',
	lastName: 'singh',
	email: 'email@gmail.com',
	age: 21,
}

function isLegal(user: User) {
	return user.age > 18
}

interface Person {
	name: string
	age: number
	greet(phrase: string): void
}

class Employee implements Person {
	name: string
	age: number

	constructor(n: string, a: number) {
		this.name = n
		this.age = a
	}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`)
	}
}

const e = new Employee('Anoop', 23)
console.log(e.name)
