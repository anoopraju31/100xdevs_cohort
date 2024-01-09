import Form from '../components/Form'

const CreateCard = () => {
	return (
		<main className='max-w-xl h-screen mx-auto flex justify-center items-center flex-col gap-10'>
			<h1 className='text-3xl font-bold font-mono uppercase'> Create Card </h1>
			<Form />
		</main>
	)
}

export default CreateCard
