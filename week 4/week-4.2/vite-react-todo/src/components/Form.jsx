import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FormField from './FormField'
import Button from './Button'
import { AppContext } from './ContextProvider'

const Form = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const { handleTasks } = useContext(AppContext)

	const handleTitleChange = (e) => setTitle(e.target.value)
	const handleDescriptionChange = (e) => setDescription(e.target.value)
	const handleSubmit = (e) => {
		e.preventDefault()

		const task = {
			title,
			description,
			completed: false,
			id: uuidv4(),
		}

		handleTasks(task)

		setTitle('')
		setDescription('')
	}

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

			<Button type='submit' title='Add Task' handleClick={handleSubmit} />
		</form>
	)
}

export default Form
