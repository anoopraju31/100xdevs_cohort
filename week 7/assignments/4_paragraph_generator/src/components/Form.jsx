import { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from './Button'
import InputField from './InputField'
import { paragraphLengthAtom } from '../store/atom/paragraphLengthAtom'

const Form = () => {
	const [input, setInput] = useState('')
	const setParagraphLength = useSetRecoilState(paragraphLengthAtom)

	const handleChange = useCallback((e) => setInput(e.target.value), [])
	const handleSubmit = (e) => {
		e.preventDefault()
		setParagraphLength(input)
		setInput('')
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
				value={input}
				handleChange={handleChange}
				type='number'
			/>
			<Button title='Generate' type='submit' />
		</form>
	)
}

export default Form
