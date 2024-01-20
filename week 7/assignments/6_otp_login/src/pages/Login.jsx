import { useRecoilValue } from 'recoil'
import LoginForm from '../components/LoginForm'
import OtpForm from '../components/OtpForm'
import { mobileNumberFormAtom } from '../store/atom'

const Login = () => {
	const formData = useRecoilValue(mobileNumberFormAtom)

	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-100'>
			{formData.isSubmitted ? <OtpForm /> : <LoginForm />}
		</main>
	)
}

export default Login
