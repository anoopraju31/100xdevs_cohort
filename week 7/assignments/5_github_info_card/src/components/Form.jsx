import Button from './Button'
import InputField from './InputField'

const Form = () => {
	return (
		<form className='flex flex-col gap-4'>
			<InputField />
			<Button title='Search' />
		</form>
	)
}

export default Form
