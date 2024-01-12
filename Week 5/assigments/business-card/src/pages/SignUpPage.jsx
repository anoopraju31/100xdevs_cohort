import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { BASE_URL } from '../constants'

const SignUpPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)
	const navigate = useNavigate()

	const handleNameChange = useCallback((e) => setName(e.target.value), [])
	const handleEmailChange = useCallback((e) => setEmail(e.target.value), [])
	const handlePasswordChange = useCallback(
		(e) => setPassword(e.target.value),
		[],
	)

	const handleSubmit = useCallback(
		async (e) => {
			try {
				e.preventDefault()
				setIsDisabled(true)

				const response = await axios.post(`${BASE_URL}/users/sign-up`, {
					name,
					email,
					password,
				})

				toast.success(response.data.message)

				setName('')
				setEmail('')
				setPassword('')

				navigate('/sign-in')
			} catch (error) {
				toast.error(error.response.data.message)
			} finally {
				setIsDisabled(false)
			}
		},
		[name, email, password, navigate],
	)

	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-50'>
			<div className='flex-shrink-0 w-full max-w-2xl p-10 rounded-xl bg-orange-100'>
				<h1 className='text-3xl text-center mb-2 font-bold font-mono text-orange-900'>
					Sign Up
				</h1>

				<form className='p-10 flex flex-col gap-4' onSubmit={handleSubmit}>
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
						id='email'
						name='email'
						label='Email'
						placeholder='Enter your email'
						type='email'
						value={email}
						isDisabled={isDisabled}
						handleChange={handleEmailChange}
					/>
					<InputField
						id='password'
						name='password'
						label='password'
						placeholder='Enter your password'
						type='password'
						value={password}
						isDisabled={isDisabled}
						handleChange={handlePasswordChange}
					/>

					<div className='flex justify-center'>
						<Button title='Submit' type='submit' isDisabled={isDisabled} />
					</div>
				</form>

				<p className='text-lg text-center mb-2 font-bold font-mono text-orange-900'>
					{' '}
					Already a user?{' '}
					<Link
						className='underline hover:text-orange-900/70 transition-colors duration-300'
						to='/sign-in'>
						{' '}
						Sign In{' '}
					</Link>
				</p>
			</div>
		</main>
	)
}

export default SignUpPage
