import Button from './components/Button'

const App = () => {
	return (
		<div className='max-w-sm mx-auto my-20 flex flex-col gap-5'>
			<Button title='Button' variant='primary' />
			<Button title='Button' variant='secondary' />
			<Button title='Button' variant='danger' />
			<Button title='Button' variant='success' />
			<Button title='Button' variant='primary' disabled />
			<Button title='Button' variant='secondary' disabled />
			<Button title='Button' variant='danger' disabled />
			<Button title='Button' variant='success' disabled />
			<Button title='Button' variant='danger' size='xs' />
			<Button title='Button' variant='danger' size='sm' />
			<Button title='Button' variant='danger' />
			<Button title='Button' variant='danger' size='lg' />
			<Button title='Button' variant='danger' size='xl' />
		</div>
	)
}

export default App
