// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// * push() - adds an element to end of the array
function pushExample(arr, element) {
	console.log('Original Array:', arr)

	arr.push(element)
	console.log('After push:', arr, '\n')
}

pushExample([1, 2, 3], 4)

// * pop() - removes an element from the end of an array and returns it
function popExample(arr) {
	console.log('Original Array:', arr)

	let removedElement = arr.pop()
	console.log('Popped element: ', removedElement)
	console.log('After pop:', arr, '\n')
}

popExample([1, 2, 3])

// * shift() - removes an element from the start of an array
function shiftExample(arr) {
	console.log('Original Array:', arr)

	let s = arr.shift()
	console.log('shifted element: ', s)
	console.log('After shift:', arr, '\n')
}

shiftExample([1, 2, 3])

// * unshift() - adds an element from the start of an array
function unshiftExample(arr, element) {
	console.log('Original Array:', arr)

	arr.unshift(element)
	console.log('After unshift:', arr, '\n')
}
unshiftExample([1, 2, 3], 0)

// * concat() - merges to arrays
function concatExample(arr1, arr2) {
	console.log('Original Arrays:', arr1, arr2)

	let arr3 = arr1.concat(arr2)
	console.log('After concat:', arr3, '\n')
}
concatExample([1, 2, 3], [4, 5, 6])

// * forEach()
function forEachExample(arr) {
	console.log('Original Array:', arr)

	arr.forEach(function (item, index) {
		console.log(item, index)
	})
}
forEachExample([1, 2, 3])

// * map()
function mapExample(arr) {
	console.log('Original Array:', arr)

	let newArr = arr.map(function (item) {
		return item * 2
	})
	console.log('After map:', newArr)
}
mapExample([1, 2, 3])

// * filter()
function filterExample(arr) {
	console.log('Original Array:', arr)

	let newArr = arr.filter(function (item) {
		return item > 3
	})
	console.log('After filter:', newArr)
}
filterExample([1, 2, 3, 4, 5])

// * find()
function findExample(arr) {
	console.log('Original Array:', arr)

	let found = arr.find(function (item) {
		return item > 3
	})
	console.log('After find:', found)
}
findExample([1, 2, 3, 4, 5])

// * sort()
function sortExample(arr) {
	console.log('Original Array:', arr)

	arr.sort(function (a, b) {
		return a - b
	})
	console.log('After sort:', arr)
}
sortExample([5, 2, 3, 4, 1])
