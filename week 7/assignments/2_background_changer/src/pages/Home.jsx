import { useRecoilValue } from 'recoil'
import Button from '../components/Button'
import { backgroundAtom } from '../store/atoms/background'
import { backgrounds } from '../utils/constants'

const Home = () => {
	const background = useRecoilValue(backgroundAtom)

	return (
		<main
			className={`h-screen p-5 flex justify-center items-end ${background}`}>
			<div className='p-5 bg-white/40 backdrop-blur-lg rounded-lg shadow-lg flex items-center gap-4'>
				{backgrounds.map(({ id, title, color, styles }) => (
					<Button key={id} title={title} color={color} styles={styles} />
				))}
			</div>
		</main>
	)
}

export default Home
