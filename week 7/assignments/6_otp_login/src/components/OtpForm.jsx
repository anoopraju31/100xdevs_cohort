import { useRecoilState } from 'recoil'
import Button from './Button'
import InputField from './InputField'
import { otpFormAtom } from '../store/atom'

const OtpForm = () => {
	const [formData, setFormData] = useRecoilState(otpFormAtom)
	const handleChangeFirst = (e) =>
		setFormData((prev) => ({ ...prev, first: e.target.value }))
	const handleChangeSecond = (e) =>
		setFormData((prev) => ({ ...prev, second: e.target.value }))
	const handleChangeThird = (e) =>
		setFormData((prev) => ({ ...prev, third: e.target.value }))
	const handleChangeForth = (e) =>
		setFormData((prev) => ({ ...prev, forth: e.target.value }))
	const handleSubmit = (e) => {
		e.preventDefault()
		setFormData((prev) => ({ ...prev, isSubmitted: true }))
	}
	return (
		<section className='w-full max-w-sm p-10 rounded-xl border border-orange-300'>
			<h1 className='text-3xl mb-8 font-bold font-mono text-center text-orange-600'>
				Login via OTP
			</h1>
			<form onSubmit={handleSubmit} className='flex flex-col gap-6 flex-1'>
				<div className='px-6 flex gap-4 items-center '>
					<InputField
						id='otp-one'
						label='First OTP Number'
						name='first'
						type='text'
						value={formData.first}
						handleChange={handleChangeFirst}
					/>
					<InputField
						id='otp-second'
						label='Second OTP Number'
						name='second'
						type='text'
						value={formData.second}
						handleChange={handleChangeSecond}
					/>
					<InputField
						id='otp-third'
						label='Third OTP Number'
						name='third'
						type='text'
						value={formData.third}
						handleChange={handleChangeThird}
					/>
					<InputField
						id='otp-forth'
						label='Forth OTP Number'
						name='forth'
						type='text'
						value={formData.forth}
						handleChange={handleChangeForth}
					/>
				</div>
				<Button type='submit' title='Login' />
			</form>
		</section>
	)
}

export default OtpForm
