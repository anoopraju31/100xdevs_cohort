import { useRecoilState } from 'recoil'
import Button from './Button'
import InputField from './InputField'
import { paragraphLengthAtom } from '../store/atom/paragraphLengthAtom'
import { isFormSubmitAtom } from '../store/atom/isFormSubmitAtom'

const Form = () => {
	const [paragraphLength, setParagraphLength] =
		useRecoilState(paragraphLengthAtom)
	const [isDisabled, setIsDisabled] = useRecoilState(isFormSubmitAtom)
	const handleChange = (e) => setParagraphLength(e.target.value)
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsDisabled(true)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full max-w-3xl mx-auto p-10 flex flex-col gap-4'>
			<InputField
				id='paragraphLength'
				label='Paragraph Length'
				name='paragraphLength'
				placeholder='Enter number of words'
				value={paragraphLength}
				handleChange={handleChange}
				isDisabled={isDisabled}
				type='number'
			/>
			<Button title='Generate' type='submit' isDisabled={isDisabled} />
		</form>
	)
}

export default Form
