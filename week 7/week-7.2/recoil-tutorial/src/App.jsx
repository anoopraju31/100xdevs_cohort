import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, isEvenSelector } from './store/atoms/count'

const App = () => {
	return (
		<RecoilRoot>
			<div className='h-screen p-10 flex justify-center items-center'>
				<Count />
			</div>
		</RecoilRoot>
	)
}

const Count = () => {
	return (
		<div className='bg-orange-300 h-[50vh] w-1/2 flex flex-col justify-center items-center gap-16'>
			<CounterRenderer />
			<EvenCountRenderer />
			<Button />
		</div>
	)
}

const CounterRenderer = () => {
	const count = useRecoilValue(countAtom)
	return <div> {count} </div>
}

const EvenCountRenderer = () => {
	const isEven = useRecoilValue(isEvenSelector)
	return <div>{isEven ? <p> count is even </p> : null}</div>
}

const Button = () => {
	const setCount = useSetRecoilState(countAtom)
	const handleClick = () => setCount((prev) => prev + 1)
	return (
		<button
			className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300'
			type='button'
			onClick={handleClick}>
			Increment
		</button>
	)
}

export default App
