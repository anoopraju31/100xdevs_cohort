import { useContext, useState } from 'react'
import { CountContext } from './context'

const App = () => {
	const [count, setCount] = useState(0)
	return (
		<CountContext.Provider value={count}>
			<Count setCount={setCount} />
		</CountContext.Provider>
	)
}

const Count = ({ setCount }) => {
	return (
		<div
			style={{
				background: '#fc3',
				height: '50vh',
				width: '50vh',
				display: 'flex',
				flexDirection: 'column',
				gap: '50px',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<CounterRenderer />
			<Button setCount={setCount} />
		</div>
	)
}

const CounterRenderer = () => {
	const count = useContext(CountContext)
	return <div> {count} </div>
}

const Button = ({ setCount }) => {
	return (
		<button type='button' onClick={() => setCount((prev) => prev + 1)}>
			{' '}
			Increment{' '}
		</button>
	)
}

export default App
