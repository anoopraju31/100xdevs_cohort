import LoginForm from '../components/LoginForm'
import OtpForm from '../components/OtpForm'

const Login = () => {
	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-100'>
			<LoginForm />
			<OtpForm />
		</main>
	)
}

export default Login
