import { useContext } from 'react'
import { AppContext } from './ContextProvider'
import FormField from './FormField'
import Button from './Button'

const Form = () => {
	const {
		handleTasks,
		task,
		handleTitleChange,
		handleDescriptionChange,
		clearTask,
	} = useContext(AppContext)

	const handleSubmit = (e) => {
		e.preventDefault()

		handleTasks(task)
		clearTask()
	}

	return (
		<form className='p-6 flex flex-col gap-2'>
			<FormField
				id='title'
				label='Title'
				placeholder='Enter title'
				type='text'
				value={task.title}
				handleChange={handleTitleChange}
			/>

			<FormField
				id='description'
				label='Description'
				placeholder='Enter description'
				type='text'
				value={task.description}
				handleChange={handleDescriptionChange}
			/>

			<Button type='submit' title='Add Task' handleClick={handleSubmit} />
		</form>
	)
}

export default Form
