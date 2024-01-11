import { useCallback, useState } from 'react'
import Button from './Button'
import InputField from './InputField'

const Form = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [interestInput, setInterestInput] = useState('')
	const [socialInput, setSocialInput] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)

	const handleNameChange = useCallback((e) => setName(e.target.value), [])
	const handleDescriptionChange = useCallback(
		(e) => setDescription(e.target.value),
		[],
	)
	const handleInterestInputChange = useCallback(
		(e) => setInterestInput(e.target.value),
		[],
	)
	const handleSocialInputChange = useCallback(
		(e) => setSocialInput(e.target.value),
		[],
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsDisabled(true)
		console.log(name, description, interestInput, socialInput)
	}

	return (
		<form className='px-0 py-5 md:p-10' onSubmit={handleSubmit}>
			<InputField
				id='name'
				name='name'
				label='Name'
				placeholder='Enter your name'
				type='text'
				value={name}
				isDisabled={isDisabled}
				handleChange={handleNameChange}
			/>

			<InputField
				id='description'
				name='description'
				label='Description'
				placeholder='Enter your description'
				isTextarea
				rows={5}
				value={description}
				isDisabled={isDisabled}
				handleChange={handleDescriptionChange}
			/>

			<InputField
				id='interest'
				name='interest'
				label='Interest'
				placeholder='Enter your interest'
				type='text'
				value={interestInput}
				isDisabled={isDisabled}
				handleChange={handleInterestInputChange}
			/>

			<InputField
				id='social-link'
				name='social-link'
				label='Social media link'
				placeholder='Enter your social media link'
				type='text'
				value={socialInput}
				isDisabled={isDisabled}
				handleChange={handleSocialInputChange}
			/>

			<div className='mt-6 flex justify-center'>
				<Button title='Submit' type='submit' isDisabled={isDisabled} />
			</div>
		</form>
	)
}

export default Form
