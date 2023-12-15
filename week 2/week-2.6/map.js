// * Create a map function that take 2 inputs,
// * an array and a transformation callback function
// * and transforms the array into a new one using the transformation function
// * return the newly created array

function map(arr, fn) {
	let newArr = []
	for (let i = 0; i < arr.length; i++) {
		let value = fn(arr[i])
		newArr.push(value)
	}

	return newArr
}

function transformation(val) {
	return val * 2
}

let arr = [1, 2, 3, 4, 5]
let newArr = map(arr, transformation)

console.log('Arr : ', arr)
console.log('NewArr : ', newArr)

// * Above functionality implemented using js map()
let newMappedArr = arr.map(transformation)

console.log('NewMappedArr : ', newMappedArr)
