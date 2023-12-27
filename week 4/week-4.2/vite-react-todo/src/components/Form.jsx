import { useState } from 'react'
import FormField from './FormField'
import Button from './Button'

const Form = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleTitleChange = (e) => setTitle(e.target.value)
	const handleDescriptionChange = (e) => setDescription(e.target.value)

	return (
		<form className='p-6 flex flex-col gap-2'>
			<FormField
				id='title'
				label='Title'
				placeholder='Enter title'
				type='text'
				value={title}
				handleChange={handleTitleChange}
			/>

			<FormField
				id='description'
				label='Description'
				placeholder='Enter description'
				type='text'
				value={description}
				handleChange={handleDescriptionChange}
			/>

			<Button />
		</form>
	)
}

export default Form
