import IconWrapper from './components/IconWrapper'

const App = () => {
	return (
		<div className='max-w-sm mx-auto py-20'>
			<IconWrapper icon='/message.svg' altText='message' />
			<div className='py-5'></div>

			<IconWrapper icon='/menu.svg' altText='menu' />
		</div>
	)
}

export default App
