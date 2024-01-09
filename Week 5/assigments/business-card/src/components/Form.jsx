import Button from './Button'

const Form = () => {
	return (
		<form className='p-10 '>
			<div className='mb-4'>
				<label htmlFor='name' className='sr-only'>
					Name
				</label>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Enter your name'
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80'
				/>
			</div>

			<div className='mb-4'>
				<label htmlFor='description' className='sr-only'>
					Description
				</label>
				<textarea
					rows='5'
					name='description'
					id='description'
					placeholder='Enter your description'
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80'></textarea>
			</div>

			<div className='mb-4'>
				<label htmlFor='interest' className='sr-only'>
					Interest
				</label>
				<input
					type='text'
					name='interest'
					id='interest'
					placeholder='Enter your interest'
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80'
				/>
			</div>

			<div className='mb-4'>
				<label htmlFor='social-link' className='sr-only'>
					Social
				</label>
				<input
					type='text'
					name='social-link'
					id='social-link'
					placeholder='Enter your social media'
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80'
				/>
			</div>

			<div className='mt-6 flex justify-center'>
				<Button />
			</div>
		</form>
	)
}

export default Form
