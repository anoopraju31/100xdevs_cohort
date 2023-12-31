import ContextProvider from './components/ContextProvider'
import Header from './components/Header'
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
	return (
		<ContextProvider>
			<main className='p-10 bg-gray-100 min-h-screen'>
				<div className='container mx-auto max-w-3xl'>
					<Header />

					<section className='rounded-lg border bg-card text-card-foreground shadow-sm'>
						<div className='flex flex-col space-y-1.5 p-6'>
							<h3 className='font-semibold text-center tracking-tight text-lg'>
								Add New Task
							</h3>
						</div>

						<Form />
					</section>

					<Tasks />
				</div>
			</main>
		</ContextProvider>
	)
}

export default App
