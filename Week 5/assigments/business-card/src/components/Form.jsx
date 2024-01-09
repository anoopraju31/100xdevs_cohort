import { useCallback, useState } from 'react'
import Button from './Button'
import InputField from './InputField'

const Form = () => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [interestInput, setInterestInput] = useState('')
	const [socialInput, setSocialInput] = useState('')

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
		console.log(name, description, interestInput, socialInput)
	}

	return (
		<form className='p-10' onSubmit={handleSubmit}>
			<InputField
				id='name'
				name='name'
				label='Name'
				placeholder='Enter your name'
				type='text'
				value={name}
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
				handleChange={handleDescriptionChange}
			/>

			<InputField
				id='interest'
				name='interest'
				label='Interest'
				placeholder='Enter your interest'
				type='text'
				value={interestInput}
				handleChange={handleInterestInputChange}
			/>

			<InputField
				id='social-link'
				name='social-link'
				label='Social media link'
				placeholder='Enter your social media link'
				type='text'
				value={socialInput}
				handleChange={handleSocialInputChange}
			/>

			<div className='mt-6 flex justify-center'>
				<Button />
			</div>
		</form>
	)
}

export default Form
