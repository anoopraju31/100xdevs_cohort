// * Create a filter function that take 2 inputs,
// * an array and a filter callback function
// * and filter the array into a new one using the filter function
// * return the newly created array

function filter(arr, fn) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		let isEven = fn(arr[i])

		if (isEven) newArr.push(arr[i])
	}

	return newArr
}

function isEven(val) {
	return val % 2 === 0
}

let arr = [1, 2, 3, 4, 5]
let newArr = filter(arr, isEven)

console.log('Arr : ', arr)
console.log('NewArr : ', newArr)

// * Above functionality implemented using js map()
let newMappedArr = arr.filter(isEven)

console.log('NewMappedArr : ', newMappedArr)
