import Card from './components/Card'
import Form from './components/Form'

const App = () => {
	return (
		<main className='min-h-screen bg-orange-100 py-10 px-4 flex flex-col lg:flex-row lg:justify-center item-center lg:items-start gap-10'>
			<div className='max-w-2xl mx-auto lg:mx-0 border p-10 h-fit border-orange-500 rounded-xl flex flex-col gap-10'>
				<h1 className='text-center text-4xl font-bold font-mono capitalize text-orange-800'>
					{' '}
					Github Profile Viewer{' '}
				</h1>
				<Form />
			</div>

			<section>
				<Card />
			</section>
		</main>
	)
}

export default App
