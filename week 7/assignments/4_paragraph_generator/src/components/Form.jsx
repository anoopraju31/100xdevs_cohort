import Button from './Button'
import InputField from './InputField'

const Form = () => {
	return (
		<form className='w-full max-w-3xl mx-auto p-10 flex flex-col gap-4'>
			<InputField />
			<Button title='Generate' type='button' />
		</form>
	)
}

export default Form
