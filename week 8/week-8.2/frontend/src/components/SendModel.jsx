import { useCallback, useRef, useState } from 'react'
import { useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil'
import { IoMdClose } from 'react-icons/io'
import toast from 'react-hot-toast'
import { isModelOpenAtom, sendMoneyAtom } from '../store/atom'
import Avatar from './Avatar'
import InputField from './InputField'
import Button from './Button'
import { instance } from '../helpers'

const SendModel = () => {
	const [amount, setAmount] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const setIsModelOpen = useSetRecoilState(isModelOpenAtom)
	const [sender, setSender] = useRecoilState(sendMoneyAtom)
	const { firstName, lastName } = sender
	const formRef = useRef(null)
	const avatar = firstName[0] + lastName[0]

	const handleClick = useRecoilCallback(() => () => setIsModelOpen(false), [])
	const handleChange = useCallback((e) => setAmount(e.target.value), [])
	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			setIsSubmitting(true)

			const response = await instance.post('/account/transfer', {
				amount: parseInt(amount * 100),
				to: sender._id,
			})

			setAmount('')
			setSender(null)
			setIsModelOpen(false)
			toast(response.data.message)
		} catch (error) {
			console.error(error)
			toast.error(error.response.data.message)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-50 h-screen flex justify-center items-center backdrop-blur-sm bg-black/10'>
			<div className='relative w-full max-w-xs p-5 rounded-xl bg-orange-100 font-mono text-orange-800 flex flex-col gap-4'>
				<h2 className='text-center font-bold text-2xl'> Send Money </h2>
				<div className='flex gap-4 items-center rounded-lg'>
					<Avatar title={avatar} />
					<h3 className='font-bold text-lg capitalize'>
						{firstName} {lastName}
					</h3>
				</div>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='flex flex-col gap-4'>
					<InputField
						id='amount'
						name='amount'
						label='Amount'
						type='number'
						placeholder='Enter amount'
						value={amount}
						handleChange={handleChange}
						isDisabled={isSubmitting}
					/>
					<Button
						title='Initiate Transfer'
						type='submit'
						isDisabled={isSubmitting}
					/>
				</form>

				<button
					type='button'
					onClick={handleClick}
					className='absolute top-2 right-2 w-6 h-6 p-2 cursor-pointer flex justify-center items-center text-sm rounded-full bg-orange-50'>
					<div className='flex-shrink-0'>
						<IoMdClose />
					</div>
				</button>
			</div>
		</div>
	)
}

export default SendModel
