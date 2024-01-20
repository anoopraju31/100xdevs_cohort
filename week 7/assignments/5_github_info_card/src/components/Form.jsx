import { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from './Button'
import InputField from './InputField'
import { usernameAtom } from '../store/atoms'

const Form = () => {
	const [username, setUsername] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const setUsernameToAtom = useSetRecoilState(usernameAtom)

	const handleChange = useCallback((e) => setUsername(e.target.value), [])
	const handleSubmit = useCallback(
		(e) => {
			try {
				e.preventDefault()
				setIsSubmitting(true)
				setUsernameToAtom(username)
			} catch (error) {
				console.error(error)
			} finally {
				setUsername('')
				setIsSubmitting(false)
			}
		},
		[username, setUsernameToAtom],
	)

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<InputField
				name='username'
				id='username'
				type='text'
				placeholder='Enter username'
				label='Username'
				value={username}
				handleChange={handleChange}
				isDisabled={isSubmitting}
			/>
			<Button isDisabled={isSubmitting} title='Search' />
		</form>
	)
}

export default Form
