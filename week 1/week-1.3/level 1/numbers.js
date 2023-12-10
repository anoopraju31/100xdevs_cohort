// * parseInt() - a global function to convert to number
// * for this to work the string should start with a number
function explainParseInt(value) {
	console.log('Original Value:', value)
	let result = parseInt(value)
	console.log('After parseInt:', result)
}

// Example Usage for parseInt
explainParseInt('42') // 42
explainParseInt('42px') // 42 but does not work for 'nfowenfo42' it will return NaN
explainParseInt('3.14') // 3

// * parseFloat() = a global function to convert to float
function explainParseFloat(value) {
	console.log('Original Value:', value)
	let result = parseFloat(value)
	console.log('After parseFloat:', result)
}

// Example Usage for parseFloat
explainParseFloat('3.14') // 3.14
explainParseFloat('42') // 42
explainParseFloat('42px') // 42
