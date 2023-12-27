let globalId = 1
let todoState = []
let oldTodoState = []

function addTodo() {
	const title = document.getElementById('title')
	const description = document.getElementById('description')

	todoState.push({
		title: title.value,
		description: description.value,
		completed: false,
		id: globalId++,
	})

	updateState(todoState)

	title.value = ''
	description.value = ''
}

function updateState(newTodos) {
	const added = []
	const deleted = []
	const updated = []

	// * identify newly added todo
	if (newTodos.length > oldTodoState.length) {
		const filtered = filterTodos(newTodos, oldTodoState)

		added.push(...filtered)
	}

	// * identify newly removed todo
	if (newTodos.length < oldTodoState.length) {
		const filtered = filterTodos(oldTodoState, newTodos)

		deleted.push(...filtered)
	}

	// * identify updated todo
	if (newTodos.length === oldTodoState.length) {
		for (let i = 0; i < oldTodoState.length; i++)
			if (
				newTodos[i].title !== oldTodoState[i].title ||
				newTodos[i].description !== oldTodoState[i].description ||
				newTodos[i].completed !== oldTodoState[i].completed
			) {
				updated.push(i)
			}
	}

	// * adding all the newly created todos to the DOM
	if (added.length) for (let todo of added) addTodoToDom(todo)

	// * removing all the deleted todos from the DOM
	if (deleted.length) for (let todo of deleted) removeTodoFromDom(todo)

	// * updating all the todos that changed
	if (updated.length)
		for (let id of updated) updateTodoInDom(oldTodoState[id], newTodos[id])

	oldTodoState = newTodos
}

function addTodoToDom(todo) {
	const todoContainer = document.createElement('div')
	todoContainer.setAttribute('id', todo.id)
	todoContainer.setAttribute(
		'class',
		'rounded-lg border bg-card text-card-foreground shadow-sm',
	)

	const headingContainer = document.createElement('div')
	headingContainer.setAttribute('class', 'flex flex-col space-y-1.5 p-6')

	const heading = document.createElement('h3')
	heading.innerHTML = todo.title
	heading.setAttribute(
		'class',
		'text-2xl font-semibold leading-none tracking-tight',
	)
	headingContainer.appendChild(heading)
	todoContainer.appendChild(headingContainer)

	const description = document.createElement('p')
	description.innerHTML = todo.description
	description.setAttribute('class', 'p-6 text-sm')
	todoContainer.appendChild(description)

	const buttonContainer = document.createElement('div')
	buttonContainer.setAttribute(
		'class',
		'items-center p-6 flex gap-4 justify-end',
	)

	// Complete Button
	const completeButton = document.createElement('button')
	completeButton.innerHTML = 'Mark as done'
	completeButton.setAttribute(
		'class',
		'flex bg-green-500 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2',
	)
	completeButton.setAttribute('onclick', `markAsDone(${todo.id})`)
	buttonContainer.appendChild(completeButton)

	// Edit Button
	const editTodoButton = document.createElement('button')
	editTodoButton.innerHTML = 'Edit'
	editTodoButton.setAttribute(
		'class',
		'flex bg-red-500 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
	)
	editTodoButton.setAttribute('onclick', `editTodo(${todo.id})`)
	buttonContainer.appendChild(editTodoButton)

	// Delete Button
	const deleteTodoButton = document.createElement('button')
	deleteTodoButton.innerHTML = 'Delete'
	deleteTodoButton.setAttribute(
		'class',
		'flex bg-orange -500 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2',
	)
	deleteTodoButton.setAttribute('onclick', `deleteTodo(${todo.id})`)
	buttonContainer.appendChild(deleteTodoButton)

	todoContainer.appendChild(buttonContainer)
	document.getElementById('task-container').appendChild(todoContainer)
}

function removeTodoFromDom(todo) {
	const element = document.getElementById(todo.id)
	element.parentElement.removeChild(element)
}

function updateTodoInDom(oldTodo, newTodo) {
	const element = document.getElementById(oldTodo.id)

	if (!element) return

	element.children[0].children[0].innerHTML = newTodo.title
	element.children[1].innerHTML = newTodo.description
	element.children[2].children[0].innerHTML = newTodo.completed
		? 'Mark as Undone'
		: 'Mark as done'
	element.children[2].children[0].setAttribute(
		'onclick',
		newTodo.completed
			? `markAsUndone(${newTodo.id})`
			: `markAsDone(${newTodo.id})`,
	)

	if (newTodo.completed) {
		element.children[0].children[0].classList.add('line-through')
		element.children[1].classList.add('line-through')
	} else {
		element.children[0].children[0].classList.remove('line-through')
		element.children[1].classList.remove('line-through')
	}
}

function isValidTodoId(id) {
	let todoIndex = -1
	for (let i = 0; i < oldTodoState.length; i++) {
		if (oldTodoState[i].id === id) {
			todoIndex = i
			break
		}
	}

	return todoIndex
}

function markAsDone(id) {
	let todoIndex = isValidTodoId(id)

	if (todoIndex === -1 || oldTodoState[todoIndex].completed) return

	const newTodo = JSON.parse(JSON.stringify(oldTodoState))

	newTodo[todoIndex].completed = true

	updateState(newTodo)
}

function markAsUndone(id) {
	let todoIndex = isValidTodoId(id)

	if (todoIndex === -1 || !oldTodoState[todoIndex].completed) return

	const newTodo = JSON.parse(JSON.stringify(oldTodoState))

	newTodo[todoIndex].completed = false

	updateState(newTodo)
}

function deleteTodo(id) {
	let todoIndex = isValidTodoId(id)

	if (todoIndex === -1) return

	const newTodos = oldTodoState.filter((todo) => todo.id !== id)

	updateState(newTodos)
}

function editTodo(id) {
	let todoIndex = isValidTodoId(id)

	if (todoIndex === -1) return

	const button = document.getElementById('submit')
	document.getElementById('title').value = oldTodoState[todoIndex].title
	document.getElementById('description').value =
		oldTodoState[todoIndex].description

	button.setAttribute('onclick', `submitEditedTodo(${id})`)
	button.innerHTML = 'submit'
}

function submitEditedTodo(id) {
	let todoIndex = isValidTodoId(id)

	if (todoIndex === -1) return

	const title = document.getElementById('title').value
	const description = document.getElementById('description').value
	const button = document.getElementById('submit')

	const newTodos = JSON.parse(JSON.stringify(oldTodoState))

	newTodos[todoIndex].title = title
	newTodos[todoIndex].description = description

	updateState(newTodos)

	document.getElementById('title').value = ''
	document.getElementById('description').value = ''

	button.setAttribute('onclick', 'addTodo()')
	button.innerHTML = 'add todo'
}

function filterTodos(arr1, arr2) {
	let map = {}

	for (let todo of arr1) map[todo.id] = true

	for (let todo of arr2) map[todo.id] = false

	const filtered = arr1.filter((todo) => map[todo.id])

	return filtered
}
