// tsx
export interface TodoType {
	id: string
	title: string
	description: string
	done: boolean
}

function Todo({ id, title, description, done }: TodoType) {
	return (
		<div style={{ textDecoration: done ? 'line-through' : 'none' }}>
			<h1>
				{id}
				{title}
			</h1>
			<h2>{description}</h2>
		</div>
	)
}

export default Todo
