import Todo from '../components/Todo'

const Home = () => {
	return (
		<main className='min-h-screen flex flex-col items-center gap-5 bg-orange-50 p-10'>
			<Todo id={1} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
		</main>
	)
}

export default Home
