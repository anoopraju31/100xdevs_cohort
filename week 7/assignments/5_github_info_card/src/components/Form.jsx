import Button from './Button'
import InputField from './InputField'

const Form = () => {
	return (
		<form className='max-w-2xl mx-auto p-10 flex flex-col gap-4'>
			<InputField />
			<Button title='Search' />
		</form>
	)
}

export default Form
