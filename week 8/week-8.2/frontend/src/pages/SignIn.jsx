import { useCallback, useEffect, useState } from 'react'
import { useRecoilStateLoadable } from 'recoil'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { BASE_URL } from '../helpers'
import { authAtom } from '../store/atom'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [auth, setAuth] = useRecoilStateLoadable(authAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (auth.contents) navigate('/')
	}, [auth, navigate])

	const handleEmailChange = useCallback((e) => setEmail(e.target.value), [])
	const handlePasswordChange = useCallback(
		(e) => setPassword(e.target.value),
		[],
	)
	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setIsSubmitting(true)

			const response = await axios.post(`${BASE_URL}/user/sign-in`, {
				username: email,
				password,
			})

			setEmail('')
			setPassword('')

			const { message, id, username, firstName, lastName, token, auth } =
				response.data

			toast.success(message)
			localStorage.setItem('token', token)
			setAuth({ id, username, firstName, lastName, auth })
		} catch (error) {
			toast.error(error.response.data.message)
			setAuth(null)
		} finally {
			setIsSubmitting(false)
		}
	}
	return (
		<main
			onSubmit={handleSubmit}
			className='min-h-screen flex justify-center items-center bg-orange-100'>
			<section className='w-full max-w-md p-10 rounded-xl border border-orange-500  font-mono'>
				<h1 className='text-3xl text-center mb-10 font-bold text-orange-800'>
					Sign In
				</h1>

				<form className='mb-6 flex flex-col gap-5'>
					<InputField
						id='email'
						name='email'
						label='Email'
						type='email'
						placeholder='Enter your email'
						value={email}
						handleChange={handleEmailChange}
						isDisabled={isSubmitting}
					/>

					<InputField
						id='password'
						name='password'
						label='Password'
						type='password'
						placeholder='Enter your password'
						value={password}
						handleChange={handlePasswordChange}
						isDisabled={isSubmitting}
					/>

					<Button title='Sign In' type='submit' />
				</form>

				<Link
					className='block text-center text-sm text-orange-700 py-2 px-6 hover:bg-orange-600 hover:text-orange-100 rounded-lg transition-colors duration-300 ease-in'
					to='/sign-up'>
					Need an account?
				</Link>
			</section>
		</main>
	)
}

export default SignIn
