import { useState } from 'react'
import InputField from './InputField'
import useDebounce from '../hooks/useDebounce'

const Form = () => {
	const [input, setInput] = useState('')
	const handleChange = (e) => setInput(e.target.value)
	const debounceHandler = () => {
		if (!input) return
		alert(input)
	}
	useDebounce(debounceHandler, 200)

	return (
		<div>
			<InputField
				placeholder='search'
				id='search'
				name='search'
				label='search'
				value={input}
				handleChange={handleChange}
			/>
		</div>
	)
}

export default Form
