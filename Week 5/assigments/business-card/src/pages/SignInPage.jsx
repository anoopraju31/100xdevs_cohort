import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import InputField from '../components/InputField'
import Button from '../components/Button'
import checkIsAuthenticated from '../utills/auth'

const SignInPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (checkIsAuthenticated()) navigate('/')
	}, [navigate])

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

				const BASE_URL = import.meta.env.VITE_BASE_URL
				const res = await axios.post(`${BASE_URL}/users/sign-in`, {
					email,
					password,
				})

				toast.success(res.data.message)

				setEmail('')
				setPassword('')

				localStorage.setItem('token', res.data?.token)

				navigate('/')
			} catch (error) {
				toast.error(error.response.data.message)
			} finally {
				setIsDisabled(false)
			}
		},
		[email, password, navigate],
	)

	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-50'>
			<div className='flex-shrink-0 w-full max-w-2xl p-10 rounded-xl bg-orange-100'>
				<h1 className='text-3xl text-center mb-2 font-bold font-mono text-orange-900'>
					Sign In
				</h1>

				<form className='p-10 flex flex-col gap-4' onSubmit={handleSubmit}>
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
					Need an account?{' '}
					<Link
						className='underline hover:text-orange-900/70 transition-colors duration-300'
						to='/sign-up'>
						{' '}
						Sign Up{' '}
					</Link>
				</p>
			</div>
		</main>
	)
}

export default SignInPage
