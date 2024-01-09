import Button from './Button'
import InputField from './InputField'

const Form = () => {
	return (
		<form className='p-10 '>
			<InputField
				id='name'
				name='name'
				label='Name'
				placeholder='Enter your name'
				type='text'
			/>

			<InputField
				id='description'
				name='description'
				label='Description'
				placeholder='Enter your description'
				isTextarea
				rows={5}
			/>

			<InputField
				id='interest'
				name='interest'
				label='Interest'
				placeholder='Enter your interest'
				type='text'
			/>

			<InputField
				id='social-link'
				name='social-link'
				label='Social media link'
				placeholder='Enter your social media link'
				type='text'
			/>

			<div className='mt-6 flex justify-center'>
				<Button />
			</div>
		</form>
	)
}

export default Form
