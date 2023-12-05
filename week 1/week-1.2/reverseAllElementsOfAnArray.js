let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let reverseNumbers = []

for (let i = numbers.length - 1; i >= 0; i--) {
	reverseNumbers.push(numbers[i])
}

console.log(reverseNumbers)
