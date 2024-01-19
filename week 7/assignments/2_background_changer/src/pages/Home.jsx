import { useRecoilValue } from 'recoil'
import Button from '../components/Button'
import { backgroundAtom } from '../store/atoms/background'

const Home = () => {
	const background = useRecoilValue(backgroundAtom)

	return (
		<main
			className={`h-screen p-5 flex justify-center items-end ${background}`}>
			<div className='p-5 bg-white/40 backdrop-blur-lg rounded-lg shadow-lg flex items-center gap-4'>
				<Button
					title='red'
					color='bg-red-500'
					styles='!bg-red-500 ! focus:ring-red-300'
				/>
				<Button
					title='yellow'
					color='bg-yellow-500'
					styles='!bg-yellow-500 ! focus:ring-yellow-300'
				/>
				<Button
					title='black'
					color='bg-black'
					styles='!bg-black ! focus:ring-black/30'
				/>
				<Button
					title='purple'
					color='bg-purple-500'
					styles='!bg-purple-500 ! focus:ring-purple-300'
				/>
				<Button
					title='green'
					color='bg-green-500'
					styles='!bg-green-500 ! focus:ring-green-300'
				/>
				<Button
					title='blue'
					color='bg-blue-500'
					styles='!bg-blue-500 ! focus:ring-blue-300'
				/>
				<Button title='default' color='bg-orange-500' />
			</div>
		</main>
	)
}

export default Home
