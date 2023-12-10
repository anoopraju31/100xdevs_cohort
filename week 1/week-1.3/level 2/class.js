class Animal {
	constructor(name, legCount) {
		this.name = name
		this.legCount = legCount
	}

	describe() {
		return `${this.name} has ${this.legCount} legs.`
	}
}

const dog = new Animal('Dog', 4)
const cat = new Animal('Cat', 4)
const spider = new Animal('Spider', 8)

console.log(dog.describe())
console.log(cat.describe())
console.log(spider.describe())
