import Form from './components/Form'

const App = () => {
	return (
		<main className='min-h-screen bg-orange-100 p-4'>
			<div className='border border-orange-300 rounded-xl'>
				<h1 className='pt-10 text-center text-4xl font-bold font-mono capitalize text-orange-800'>
					{' '}
					Github Profile Viewer{' '}
				</h1>
				<Form />
			</div>
		</main>
	)
}

export default App
