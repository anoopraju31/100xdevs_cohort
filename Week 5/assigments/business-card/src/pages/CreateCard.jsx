import Form from '../components/Form'

const CreateCard = () => {
	return (
		<main className='h-screen flex justify-center items-center'>
			<div className='flex-shrink-0 w-full max-w-2xl p-10 rounded-xl bg-orange-200'>
				<h1 className='text-3xl text-center mb-2 font-bold font-mono uppercase'>
					{' '}
					Create Card{' '}
				</h1>
				<Form />
			</div>
		</main>
	)
}

export default CreateCard
