import Todo, { TodoType } from './Todo'

const todos: TodoType[] = [
	{
		id: '1',
		title: 'Todo 1',
		description: 'Todo 1 description',
		done: false,
	},
	{
		id: '2',
		title: 'Todo 2',
		description: 'Todo 2 description',
		done: true,
	},
	{
		id: '3',
		title: 'Todo 3',
		description: 'Todo 3 description',
		done: false,
	},
	{
		id: '4',
		title: 'Todo 4',
		description: 'Todo 4 description',
		done: false,
	},
]

const App = () => {
	return (
		<div className=''>
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} />
			))}
		</div>
	)
}

export default App
