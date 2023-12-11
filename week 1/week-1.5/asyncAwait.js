function AnoopAsyncFunction() {
	let p = new Promise(function (resolve) {
		resolve('Hi There!')
	})

	return p
}

// promise resolve
function main() {
	AnoopAsyncFunction().then(function (value) {
		console.log('Promise: ', value)
	})
}

async function awaitMain() {
	const value = await AnoopAsyncFunction()
	console.log('Await: ', value)
}

main()
awaitMain()
