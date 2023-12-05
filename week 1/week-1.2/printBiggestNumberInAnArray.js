let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let biggestNumber = -Infinity

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > biggestNumber) biggestNumber = numbers[i]
}

console.log(biggestNumber)
