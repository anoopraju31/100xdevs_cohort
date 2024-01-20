import Form from '../components/Form'
import Card from '../components/Card'
import { Suspense } from 'react'

const Home = () => {
	return (
		<main className='min-h-screen bg-orange-100 py-10 px-4 flex flex-col lg:flex-row lg:justify-center item-center lg:items-start gap-10'>
			<div className='max-w-2xl mx-auto lg:mx-0 py-10 md:px-10 h-fit rounded-xl flex flex-col gap-10'>
				<h1 className='text-center text-4xl font-bold font-mono capitalize text-orange-800'>
					{' '}
					Github Profile Viewer{' '}
				</h1>
				<Form />
			</div>

			<section>
				<Suspense
					fallback={
						<h1 className='lg:w-[512px] mx-auto p-10 text-center text-lg font-mono font-medium text-orange-800'>
							{' '}
							Loading...{' '}
						</h1>
					}>
					<Card />
				</Suspense>
			</section>
		</main>
	)
}

export default Home
