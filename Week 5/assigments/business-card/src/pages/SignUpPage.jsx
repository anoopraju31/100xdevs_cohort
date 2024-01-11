import { useCallback, useState } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const SignUpPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)

	const handleNameChange = useCallback((e) => setName(e.target.value), [])
	const handleEmailChange = useCallback((e) => setEmail(e.target.value), [])
	const handlePasswordChange = useCallback(
		(e) => setPassword(e.target.value),
		[],
	)

	const handleSubmit = useCallback(async (e) => {
		try {
			e.preventDefault()
			setIsButtonDisabled(true)
		} catch (error) {
			setIsButtonDisabled(false)
			console.log(error)
		}
	}, [])

	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-50'>
			<div className='flex-shrink-0 w-full max-w-2xl p-10 rounded-xl bg-orange-100'>
				<h1 className='text-3xl text-center mb-2 font-bold font-mono text-orange-900'>
					Sign Up
				</h1>

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
						id='email'
						name='email'
						label='Email'
						placeholder='Enter your email'
						type='email'
						value={email}
						handleChange={handleEmailChange}
					/>
					<InputField
						id='password'
						name='password'
						label='password'
						placeholder='Enter your password'
						type='password'
						value={password}
						handleChange={handlePasswordChange}
					/>

					<div className='mt-6 flex justify-center'>
						<Button
							title='Submit'
							type='submit'
							isDisabled={isButtonDisabled}
						/>
					</div>
				</form>
			</div>
		</main>
	)
}

export default SignUpPage
