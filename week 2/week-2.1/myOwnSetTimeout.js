// * Callback method
function mySetTimeoutUsingCallback(fn, duration) {
	setTimeout(fn, duration)
}

// * Promise Method
function mySetTimeoutUsingPromise(duration) {
	let p = new Promise((resolve) => {
		setTimeout(resolve, duration)
	})

	return p
}

mySetTimeoutUsingCallback(() => {
	console.log('My setTimeout using callback!')
}, 1000)

// * promisified function does not accept a callback function
mySetTimeoutUsingPromise(1000).then(() => {
	console.log('My setTimeout using Promise!')
})
