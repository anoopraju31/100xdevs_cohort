import Button from './Button'
import InputField from './InputField'

const OtpForm = () => {
	return (
		<section className='w-full max-w-sm p-10 rounded-xl border border-orange-300'>
			<h1 className='text-3xl mb-8 font-bold font-mono text-center text-orange-600'>
				Login via OTP
			</h1>
			<form className='flex flex-col gap-6 flex-1'>
				<div className='px-6 flex gap-4 items-center '>
					<InputField
						id='otp-one'
						label='First OTP Number'
						name='first'
						type='text'
					/>
					<InputField
						id='otp-second'
						label='Second OTP Number'
						name='second'
						type='text'
					/>
					<InputField
						id='otp-third'
						label='Third OTP Number'
						name='third'
						type='text'
					/>
					<InputField
						id='otp-forth'
						label='Forth OTP Number'
						name='forth'
						type='text'
					/>
				</div>
				<Button title='Login' />
			</form>
		</section>
	)
}

export default OtpForm
