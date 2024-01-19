import Button from './components/Button'

const App = () => {
	return (
		<main className='h-screen flex justify-center items-end'>
			<div className='p-5 flex items-center gap-4'>
				<Button title='red' color='bg-red-500' styles='bg-red-500' />
				<Button title='yellow' color='bg-yellow-500' styles='bg-yellow-500' />
				<Button title='black' color='bg-black' styles='bg-black' />
				<Button title='purple' color='bg-purple-500' styles='bg-purple-500' />
				<Button title='green' color='bg-green-500' styles='bg-green-500' />
				<Button title='blue' color='bg-blue-500' styles='bg-blue-500' />
				<Button title='default' color='bg-orange-500' styles='bg-orange-500' />
			</div>
		</main>
	)
}

export default App
