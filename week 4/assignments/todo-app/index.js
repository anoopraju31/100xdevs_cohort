var container = document.getElementById('todos')
let globalId = 1
let todoState = []
let oldTodoState = []

function addTodoToDom(todo) {
	const outterDiv = document.createElement('div')
	outterDiv.setAttribute('id', todo.id)
	outterDiv.setAttribute('class', 'todo')

	const titleDiv = document.createElement('div')
	titleDiv.innerHTML = todo.title
	outterDiv.appendChild(titleDiv)

	const descriptionDiv = document.createElement('div')
	descriptionDiv.innerHTML = todo.description
	outterDiv.appendChild(descriptionDiv)

	const completeButton = document.createElement('button')
	completeButton.innerHTML = 'Mark as done'
	completeButton.setAttribute('onclick', `markAsDone(${todo.id})`)
	outterDiv.appendChild(completeButton)

	const deleteTodoButton = document.createElement('button')
	deleteTodoButton.innerHTML = 'Delete'
	deleteTodoButton.setAttribute('onclick', `deleteTodo(${todo.id})`)
	outterDiv.appendChild(deleteTodoButton)

	const editTodoButton = document.createElement('button')
	editTodoButton.innerHTML = 'Edit'
	editTodoButton.setAttribute('onclick', `editTodo(${todo.id})`)
	outterDiv.appendChild(editTodoButton)

	document.getElementById('todos').appendChild(outterDiv)
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

function removeTodoFromDom(todo) {
	const element = document.getElementById(todo.id)
	element.parentElement.removeChild(element)
}

function updateTodoInDom(oldTodo, newTodo) {
	const element = document.getElementById(oldTodo.id)

	if (!element) return

	element.children[0].innerHTML = newTodo.title
	element.children[1].innerHTML = newTodo.description
	element.children[2].innerHTML = newTodo.completed ? 'Done' : 'Mark as done'
}

function filterTodos(arr1, arr2) {
	let map = {}

	for (let todo of arr1) map[todo.id] = true

	for (let todo of arr2) map[todo.id] = false

	const filtered = arr1.filter((todo) => map[todo.id])

	return filtered
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

function addTodo() {
	const title = document.getElementById('title').value
	const description = document.getElementById('description').value
	todoState.push({
		title: title,
		description: description,
		completed: false,
		id: globalId++,
	})
	updateState(todoState)

	document.getElementById('title').value = ''
	document.getElementById('description').value = ''
}
