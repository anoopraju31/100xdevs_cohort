const url = 'https://sum-server.100xdevs.com/todos'

function main() {
	fetch(url)
		.then((res) => res.json())
		.then((data) => console.log(data.todos.length))
}

async function asyncMain() {
	const res = await fetch(url)
	const data = await res.json()

	console.log(data.todos.length)
}

main()
asyncMain()
