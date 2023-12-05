let sum = 0
let checkpoint = 10

for (let i = 0; i < 1000000000000; i++) {
	// sum += i
	if (i === checkpoint) {
		console.log(i)
		checkpoint *= 10
	}
}

console.log(sum)
