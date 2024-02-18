1. Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
```

2. Create a React component that takes todos as an input and renders them
```tsx
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

```