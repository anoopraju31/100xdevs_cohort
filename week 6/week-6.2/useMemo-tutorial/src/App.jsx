import { useState, useMemo } from 'react'

const App = () => {
	return (
		<main className='bg-orange-100 min-h-screen flex justify-center items-center'>
			<Counter />
		</main>
	)
}

const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [num, setNum] = useState('')

	const getSum = useMemo(() => {
		if (!num) return
		let n = parseInt(num)
		let sum = (n * (n + 1)) / 2

		return sum
	}, [num])

	return (
		<div className='w-full max-w-md mx-auto'>
			<div className='mb-10'>
				<input
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
					type='text'
					value={num}
					onChange={(e) => setNum(e.target.value)}
				/>

				<p className='mt-5 text-center text-orange-900 font-bold text-lg'>
					Sum is {getSum}
				</p>
			</div>

			<button
				type='button'
				className='bg-orange-300 border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
				onClick={() => setCounter((prev) => prev + 1)}>
				Counter {counter}
			</button>
		</div>
	)
}

export default App
