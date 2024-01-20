import Button from './Button'
import InputField from './InputField'

const LoginForm = () => {
	return (
		<section className='w-full max-w-sm p-10 rounded-xl border border-orange-300'>
			<h1 className='text-3xl mb-8 font-bold font-mono text-center text-orange-600'>
				Login via OTP
			</h1>
			<form className='flex flex-col gap-6 flex-1'>
				<InputField
					id='mobile-number'
					label='Mobile Number'
					name='mobileNumber'
					placeholder='Enter mobile number'
					type='text'
				/>
				<Button title='Send OTP' />
			</form>
		</section>
	)
}

export default LoginForm
