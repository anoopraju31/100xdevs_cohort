import Button from './Button'

const Task = () => {
	return (
		<div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
			<div className='flex flex-col space-y-1.5 p-6'>
				<h3 className='text-2xl font-semibold leading-none tracking-tight'>
					Title
				</h3>
			</div>

			<p className='p-6 text-sm'> description </p>

			<div className='items-center p-6 flex gap-4 justify-end'>
				<Button title='Mark as done' />
				<Button title='Edit' />
				<Button title='Delete' />
			</div>
		</div>
	)
}

export default Task